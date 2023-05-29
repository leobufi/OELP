Rails.application.routes.draw do
  devise_for :admins
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root to: "pages#home"
  get 'dashboard', to: 'pages#dashboard'
  resources :cans, only: [:new, :create, :edit, :update, :destroy]
  resources :brand_infos, only: [:new, :create, :edit, :update, :destroy]
  resources :baselines, only: [:new, :create, :edit, :update, :destroy]
  resources :photos, only: [:new, :create, :edit, :update, :destroy]
  resources :instagrams, only: [:new, :create, :edit, :update, :destroy]
  resources :contacts, only: [:new, :create]

end
