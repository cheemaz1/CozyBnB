class UpdateReviewsAgain < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :author_id

    add_column :reviews, :user_id, :integer 
  end
  
end
