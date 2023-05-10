class CreateInstagrams < ActiveRecord::Migration[7.0]
  def change
    create_table :instagrams do |t|
      t.string :top_left_photo
      t.string :bottom_left_photo
      t.string :top_right_photo
      t.string :bottom_right_photo
      t.string :link
      t.timestamps
    end
  end
end
