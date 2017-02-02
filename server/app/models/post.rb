class Post < ApplicationRecord
  belongs_to :group
  serialize :from, Hash
end
