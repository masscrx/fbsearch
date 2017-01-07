Rails.application.routes.draw do
  resources :groups do
  	get 'search', on: :collection
    get :posts
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
