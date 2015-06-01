Rails.application.routes.draw do
  root 'home#index'
  get 'faq', to: 'home#faq'
  get 'why', to: 'home#why'
  
  
  resources :betas, only: :index
  
  
end
