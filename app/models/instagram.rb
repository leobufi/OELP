class Instagram < ApplicationRecord
  validates :top_left_photo, presence: true
  validates :top_right_photo, presence: true
  validates :bottom_left_photo, presence: true
  validates :bottom_right_photo, presence: true
  validates :link, presence: true

  has_one_attached :top_left_photo
  has_one_attached :top_right_photo
  has_one_attached :bottom_left_photo
  has_one_attached :bottom_right_photo

end
