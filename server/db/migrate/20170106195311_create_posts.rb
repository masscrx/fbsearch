class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.text :message
      t.string :updated_time
      t.string :fb_post_id
      t.string :story
      t.references :group, foreign_key: true

      t.timestamps
    end
  end
end
