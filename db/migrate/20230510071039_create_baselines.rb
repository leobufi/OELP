class CreateBaselines < ActiveRecord::Migration[7.0]
  def change
    create_table :baselines do |t|
      t.text :baseline
      t.timestamps
    end
  end
end
