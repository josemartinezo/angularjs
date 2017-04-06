(function(){
	var app = angular.module('store',[]);

	var gem = {
			name:'Dodecahedron',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. it quam magni?',	
			canPurchase: false,
			soldOut: false,
		}
	var gems = [
		{
			name:'Dodecahedron',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. it quam magni?',	
			canPurchase: false,
			soldOut: false
		},
		{
			name:'Zirconiun',
			price: 3.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. it quam magni?',	
			canPurchase: false,
			soldOut: false
		},
		{
			name:'Hexagonal Gem',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. it quam magni?',	
			canPurchase: false,
			soldOut: false
		},
		{
			name:'Zaphire',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. it quam magni?',	
			canPurchase: false,
			soldOut: false
		},
		{
			name:'Esmeralda',
			price: 4.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. it quam magni?',	
			canPurchase: false,
			soldOut: false
		},
		{
			name:'Jade',
			price: 1.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. it quam magni?',	
			canPurchase: false,
			soldOut: false
		},
		{
			name:'Rubi',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. it quam magni?',	
			canPurchase: false,
			soldOut: false
		},
		{
			name:'Diamante',
			price: 9.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. it quam magni?',	
			canPurchase: false,
			soldOut: false
		},
		{
			name:'Ónice',
			price: 7.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. it quam magni?',	
			canPurchase: false,
			soldOut: false
		}
	];

	app.controller('StoreController',function(){
		this.products = gems;

	});
})();

