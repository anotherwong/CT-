var playerImage;
var enemySet1Photos = new Array(5);
var enemySet2Photos = new Array(5);
var enemySet1;
var enemySet2;
var enemySet3;
var p1;
var c1 = new Collision();
var pm1 = new ProjectileManager(5);
var healthBar = new HealthBar(10,10); // starting health and maximum health

function setup()
{
	createCanvas(500,500);

	// setup Score
	score = new Score();
	score.setScoreXY(440,50);

	// setup player
	p1 = new Character(100,400); // player starting x,y
	playerImage = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/Airplane.png');
	p1.setCharacterImage(playerImage,75,75);


	// setup health bar
	healthBar.setHealthBarXY(290,10);

	enemySet1Photos[0] = loadImage('https://anotherwong.github.io/Resourcehosting/Q1A.png');
	enemySet1Photos[1] = loadImage('https://anotherwong.github.io/Resourcehosting/Q1B.png');
	enemySet1Photos[2] = loadImage('https://anotherwong.github.io/Resourcehosting/Q1C.png');
	enemySet1Photos[3] = loadImage('https://anotherwong.github.io/Resourcehosting/Q1D.png');
	enemySet1Photos[4] = loadImage('https://anotherwong.github.io/Resourcehosting/Q1D.png');
	enemySet1Photos[5] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/question1.png');




	// set 4 enemies, no images, answer is 1
	enemySet1 = new EnemyManager(4,enemySet1Photos,true,1);  // number of enemies, photos, random, answer
	enemySet1.setQuestion(enemySet1Photos[5],0,0);  // photo, x, y
	enemySet1.setEnemySpeed(1);
	enemySet1.setLengthHeight(63,40);
	enemySet1.setEnemySpacing(60);
	enemySet1.setKillOutOfScreen(400);
	enemySet1.startEnemies();



	enemySet2Photos[0] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/twentythree.png');
	enemySet2Photos[1] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/fourtyfive.png');
	enemySet2Photos[2] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/fiftyfour.png');
	enemySet2Photos[3] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/fiftynine.png');
	enemySet2Photos[4] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/question2.png');


	// set 5 enemies, no images, answer is 3
	enemySet2 = new EnemyManager(4,enemySet2Photos,true,1);
	enemySet2.setQuestion(enemySet2Photos[4],0,0);  // photo, x, y
	enemySet2.setKillOutOfScreen(400);
	enemySet2.setLengthHeight(63,40);
	enemySet2.setEnemySpacing(75);
	enemySet2.setEnemySpeed(1);

	// set 6 enemies, no images, answer is 5
	enemySet3 = new EnemyManager(6,null,false,1);
	enemySet3.setKillOutOfScreen(400);
	enemySet3.setEnemySpeed(1.5);

}

function draw()
{
	background(125,125,125);

	if (p1.isAlive() == true)
	{
		// draw player character
		// wait to move player character based on controls
		p1.drawCharacter();
		p1.moveCharacter();
	}

	// --------------------------------- MODIFY CODE START ----------------------------------
	// ------------------ setup logic to transition between questions -----------------------


	// START QUESTION 1 --------------------------------------------------------
	if (enemySet1.isQuestionFinished() == false)
	{
		// show the question
		enemySet1.drawQuestion();


		var gameState = enemySet1.drawEnemies(pm1);
		if (gameState == -1)
		{
			// if enemies have reach the base
			console.log('enemies have reached base, subtract health');
			healthBar.deductHealth(1);
			enemySet2.startEnemies();
		}
		else if (gameState == 1)
		{
			// if answer has reach the base
			console.log('answer has reached base, add score');
			score.addScore(10);
			enemySet2.startEnemies();
		}
		if (enemySet1.isAnswerAlive() == false)
		{
			// if answer has been shot
			console.log('answer has been shot!');
			enemySet2.startEnemies();
		}
	}
	// END QUESTION 1 ----------------------------------------------------------


	// START QUESTION 2 --------------------------------------------------------
	if (enemySet2.isQuestionFinished() == false)
	{
		// show the question
		enemySet2.drawQuestion();


		var gameState = enemySet2.drawEnemies(pm1);
		if (gameState == -1)
		{
			// if enemies have reach the base
			console.log('enemies have reached base, subtract health');
			healthBar.deductHealth(1);
			enemySet3.startEnemies();
		}
		else if (gameState == 1)
		{
			// if answer has reach the base
			console.log('answer has reached base, add score');
			enemySet3.startEnemies();
		}
		if (enemySet2.isAnswerAlive() == false)
		{
			// if answer has been shot
			console.log('answer has been shot!');
			enemySet3.startEnemies();
		}
	}
	// END QUESTION 2 ----------------------------------------------------------




	if (enemySet3.isQuestionFinished() == false)
	{
		enemySet3.drawEnemies(pm1);
		if (enemySet3.isAnswerAlive() == false)
		{
			// add things like sound effects / increase or decrease score
			console.log('answer has been shot!');
			// ------- CUSTOM THE CODE BELOW ------ WHERE TO GO AFTER LAST QUESTION
			window.open("mainmenu/mainmenu.html","_self");
		}
	}

	// --------------------------------- MODIFY CODE END ----------------------------------



	// manage projectiles - do not touch
	pm1.manageProjectile();


	// show health bar
	healthBar.showHealthBar();

	// show Score
	score.showScore();

	image(enemySet1Photos[5],0,0);

}


function keyPressed()
{
	p1.charKeyPressed();
	pm1.myKeyPressed(p1);
}

function keyReleased()
{
	p1.charKeyReleased();
	pm1.myKeyReleased();
}
