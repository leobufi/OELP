class CreateBrandInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :brand_infos do |t|
      t.string :title
      t.text :content
      t.string :side
      t.timestamps
    end
  end
end
