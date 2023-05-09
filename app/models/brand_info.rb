class BrandInfo < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true
  validates :side, presence: true

  has_rich_text :content
end
