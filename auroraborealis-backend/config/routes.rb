Rails.application.routes.draw do

  root 'comments#index'

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/get_current_user", to: "sessions#get_current_user"

  resources :comments
  resources :posts

  resources :users do 
    resources :posts
  end 

  resources :posts do 
    resources :comments
  end 

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
