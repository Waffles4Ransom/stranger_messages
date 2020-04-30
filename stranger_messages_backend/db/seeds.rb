# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{username: 'Will'}, {username: 'dart the demodog'}])
Message.create(name: 'Warn Mom', content: 'RUN', user: users.first)
Message.create(name: 'whereru', content: 'i am here', user: users.first)
Message.create(name: 'hungry', content: 'gimme three musky', user: users.last)
Message.create(name: 'sorry', content: 'about mews', user: users.last)

mike = User.create(username: "Mike")
mike_messages = [
  {
    name: "i like",
    content: "eleven",
    user_id: mike.id
  },
  {
    name: "for El",
    content: "Lets go to the Snow Ball",
    user_id: mike.id
  }
]
mike_messages.each {|m| Message.create(m)}


el = User.create(username: "eleven")
el_messages = [
  {
    name: "mine",
    content: "leggo my eggo",
    user_id: el.id
  },
  {
    name: "friends",
    content: "dont lie",
    user_id: el.id
  },
  {
    name: "ugh",
    content: "mouthbreather",
    user_id: el.id
  },
  {
    name: "pretty",
    content: "bitchin",
    user_id: el.id
  }
]
el_messages.each {|m| Message.create(m)}

lucas = User.create(username: "Lucas")
lucas_messages = [
  {
    name: "1st of all",
    content: "its a wrist rocket",
    user_id: lucas.id
  },
  {
    name: "Madmax",
    content: "is the coolest",
    user_id: lucas.id
  }
]
lucas_messages.each {|m| Message.create(m)}

dust = User.create(username: "Dustin")
dust_messages = [
  {
    name: "These books are",
    content: "my paddles",
    user_id: dust.id
  },
  {
    name: "betrayer",
    content: "LANDO",
    user_id: dust.id
  },
  {
    name: "curiosity door",
    content: "y u locked",
    user_id: dust.id
  },
  {
    name: "for Suzie",
    content: "and there upon a rainbow is the answer to a never ending meeeesssaggggeeeeee ahhhahhhahhh",
    user_id: dust.id
  }
]
dust_messages.each {|m| Message.create(m)}

erica = User.create(username: "Queen Erica")
erica_messages = [
  {
    name: "just the facts",
    content: "nerd",
    user_id: erica.id
  }
]
erica_messages.each {|m| Message.create(m)}

hop = User.create(username: "Hopper")
hop_messages = [
  {
    name: "mornings r 4",
    content: "coffee and contemplation",
    user_id: hop.id
  },
  {
    name: "I said...",
    content: "THREE INCHES",
    user_id: hop.id
  }
]
hop_messages.each {|m| Message.create(m)}





