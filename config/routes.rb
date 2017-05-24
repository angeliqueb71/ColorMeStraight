Rails.application.routes.draw do
  get '/haircare' => 'haircare#index'

  get '/chemicals' => 'chemicals#index'

  get '/color' => 'color#index'
  get '/rooms' => 'rooms#show'
  resources :messages



  devise_for :users
  root to: 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'
end
