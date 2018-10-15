class CreatePizzas < ActiveRecord::Migration[5.2]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.boolean :vegetarian
      t.string :toppings

      t.timestamps
    end
  end
end
