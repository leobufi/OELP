class Photo < ApplicationRecord
  validates :photo, presence: true
  validates :side, presence: true

  has_one_attached :photo
end
