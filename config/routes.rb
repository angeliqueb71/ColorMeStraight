Rails.application.routes.draw do
  # get '/haircare' => 'haircare#index'

  root to: 'home#index'

  # root to: 'rooms#show'

  # get '/' => 'home#index'


  get '/rooms' => 'rooms#show'

  get '/chemicals' => 'chemicals#index'

  get '/color' => 'color#index'
  

  resources :messages



  devise_for :users


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'
end
