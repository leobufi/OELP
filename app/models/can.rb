class Can < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true
  validates :label, presence: true
  validates :color, presence: true

  has_rich_text :content
  has_one_attached :label
end
