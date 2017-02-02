class AddColumnsToPost < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :link, :text
    add_column :posts, :picture, :text
    add_column :posts, :from, :text
  end
end
