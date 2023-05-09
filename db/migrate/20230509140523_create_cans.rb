class CreateCans < ActiveRecord::Migration[7.0]
  def change
    create_table :cans do |t|
      t.string :title
      t.text :content
      t.string :label
      t.string :color
      t.timestamps
    end
  end
end
