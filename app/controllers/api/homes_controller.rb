class Api::HomesController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index 
        if !params[:searchParams]   
            # debugger  
            @homes = Home.all    
        elsif params[:searchParams][:city]
            # debugger
            @homes = Home.where(city: params[:searchParams][:city])
            
        end
        render :index
    end

    def create
        @home = Home.new(home_params)
        if @home.save 
            render :show
        else
            render json: @home.errors.full_messages, status: 422
        end
    end
    
    def show
        @home = Home.find(params[:id])
        render :show 
    end

    def update 
        @home = Home.find(params[:id])
        if @home && @home.update(home_params)
            render :show
        else
            render json: @home.errors.full_messages, status: 422
        end
    end

    # def search
    #     search_homes = Home.filtered(params[:query])
    #     if search_homes
    #         @homes = search_homes
    #         render :index
    #     else 
    #         render json: ["No Home is Available :"], status: 404
    #     end
    # end

    private

    def home_params 
        params.require(:home).permit(:home_name, :description, :address, :price, :city, :lat, :lng, images: [])
    end

    # def bounds
    #     params[:bounds]
    # end

end