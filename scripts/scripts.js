const landingSites = [
  'Junk Junction',
  'Haunted Hills',
  'Pleasant Park',
  'North Pleasant',
  'Motel',
  'Anarchy Acres',
  'Loot Lake House',
  'Loot Lake Factories',
  'Tomato Town',
  'Risky Reels',
  'Wailing Woods',
  'Edit House',
  'Lonely Lodge',
  'Race Track',
  'Retail Row',
  'Dusty Divot Building',
  'Dusty Divot Crater',
  'Salty Springs',
  'Lucky Landing',
  'Fatal Fields',
  'Prison',
  'Moisty Mire',
  'Flush Factory',
  'South Factories',
  'Greasy Grove',
  'Shifty Shafts',
  'Indoor Soccer Field',
  'Snobby Shores',
  'Missile Silo',
  'Tilted Towers',
  'Haunted House',
  'Super Hideout',
  'Loot Lake North',
]

const whereWeLandingBoys = () => {
	let answer = '';
  console.log('\n', '\n');
  let randNum = Math.floor(Math.random()* (landingSites.length - 1));
  if (randNum === 6) return "You're Fucked. Land at " + landingSites[randNum];
   else return landingSites[randNum];
}

const result = () => {
	const landing = whereWeLandingBoys();
	document.getElementById('results').innerHTML = landing;
	document.getElementById('results').style.display = "flex";
}
