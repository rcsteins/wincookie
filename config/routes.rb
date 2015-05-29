Rails.application.routes.draw do
  root 'home#index'
  
  resources :betas, only: :index
end
