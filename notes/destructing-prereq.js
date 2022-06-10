function nestedArrayAndObject() {
  // refactor this to a single line of destructuring...
  const info = {
    title: 'Once Upon a Time',
    protagonist: {
      name: 'Emma Swan',
      enemies: [
        {name: 'Regina Mills', title: 'Evil Queen'},
        {name: 'Cora Mills', title: 'Queen of Hearts'},
        {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
        {name: 'Zelena', title: 'The Wicked Witch'},
      ],
    },
  }
  const {
    title,
    protagonist: {
      name: protagonistName,
      enemies: [a, b, enemy, d],
    },
    protagonist: {
      enemies: [x, y, {name: enemyName, title: enemyTitle}, z],
    },
  } = info // <-- replace the next few `const` lines with this
  console.log(title)
  console.log(protagonistName)
  console.log(enemy)
  console.log(a, b, d)
  console.log(enemyName)
  //   const title = info.title
  //   const protagonistName = info.protagonist.name
  //   const enemy = info.protagonist.enemies[3]
  //   const enemyTitle = enemy.title
  //   const enemyName = enemy.name
  console.log(
    `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`,
  )
  // return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
}

nestedArrayAndObject()
