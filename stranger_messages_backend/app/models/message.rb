class Message < ApplicationRecord
  belongs_to :user

  validates :name, :content, presence: true
  validates :content, format: { with: /\A[a-zA-Z ]+\z/, message: "can only contain letters" }
  validates :content, length: {maximum: 100 }
end
