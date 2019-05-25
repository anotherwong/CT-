var score;
var playerImage;
var enemySet1Photos = new Array(5);
var enemySet2Photos = new Array(5);
var enemySet3Photos = new Array(5);
var enemySet1;
var enemySet2;
var enemySet3;
var p1;
var c1 = new Collision();
var pm1 = new ProjectileManager(5);
var healthBar = new HealthBar(100,100); // starting health and maximum health

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
	enemySet1Photos[4] = loadImage('https://anotherwong.github.io/Resourcehosting/Q1Q.png');


	// set 4 enemies, no images, answer is 1
	enemySet1 = new EnemyManager(4,enemySet1Photos,true,0);  // number of enemies, photos, random, answer
	enemySet1.setQuestion(enemySet1Photos[4],10,0);  // photo, x, y
	enemySet1.setEnemySpeed(1);
	enemySet1.setLengthHeight(63,40);
	enemySet1.setEnemySpacing(60);
	enemySet1.setKillOutOfScreen(400);
	enemySet1.startEnemies();



	enemySet2Photos[0] = loadImage('https://anotherwong.github.io/Resourcehosting/Q2A.png');
	enemySet2Photos[1] = loadImage('https://anotherwong.github.io/Resourcehosting/Q2B.png');
	enemySet2Photos[2] = loadImage('https://anotherwong.github.io/Resourcehosting/Q2C.png');
	enemySet2Photos[3] = loadImage('https://anotherwong.github.io/Resourcehosting/Q2D.png');
	enemySet2Photos[4] = loadImage('https://anotherwong.github.io/Resourcehosting/Q2Q.png');


	// set 5 enemies, no images, answer is 3
	enemySet2 = new EnemyManager(4,enemySet2Photos,true,1);
	enemySet2.setQuestion(enemySet2Photos[4],0,0);  // photo, x, y
	enemySet2.setKillOutOfScreen(400);
	enemySet2.setLengthHeight(63,40);
	enemySet2.setEnemySpacing(75);
	enemySet2.setEnemySpeed(1);



	enemySet3Photos[0] = loadImage('https://anotherwong.github.io/Resourcehosting/Q3A.png');
	enemySet3Photos[1] = loadImage('https://anotherwong.github.io/Resourcehosting/Q3B.png');
	enemySet3Photos[2] = loadImage('https://anotherwong.github.io/Resourcehosting/Q3C.png');
	enemySet3Photos[3] = loadImage('https://anotherwong.github.io/Resourcehosting/Q3D.png');
	enemySet3Photos[4] = loadImage('https://anotherwong.github.io/Resourcehosting/Q3Q.png');


	// set 5 enemies, no images, answer is 3
	enemySet3 = new EnemyManager(4,enemySet3Photos,true,1);
	enemySet3.setQuestion(enemySet3Photos[4],0,0);  // photo, x, y
	enemySet3.setKillOutOfScreen(400);
	enemySet3.setLengthHeight(63,40);
	enemySet3.setEnemySpacing(75);
	enemySet3.setEnemySpeed(1);
	
	enemySet4Photos[0] = loadImage('https://anotherwong.github.io/Resourcehosting/Q4A.png');
	enemySet4Photos[1] = loadImage('https://anotherwong.github.io/Resourcehosting/Q4B.png');
	enemySet4Photos[2] = loadImage('https://anotherwong.github.io/Resourcehosting/Q4C.png');
	enemySet4Photos[3] = loadImage('https://anotherwong.github.io/Resourcehosting/Q4D.png');
	enemySet4Photos[4] = loadImage('https://anotherwong.github.io/Resourcehosting/Q4Q.png');


	// set 5 enemies, no images, answer is 3
	enemySet4 = new EnemyManager(4,enemySet4Photos,true,1);
	enemySet4.setQuestion(enemySet4Photos[4],0,0);  // photo, x, y
	enemySet4.setKillOutOfScreen(400);
	enemySet4.setLengthHeight(63,40);
	enemySet4.setEnemySpacing(75);
	enemySet4.setEnemySpeed(1);
	
	enemySet5Photos[0] = loadImage('https://anotherwong.github.io/Resourcehosting/Q5A.png');
	enemySet5Photos[1] = loadImage('https://anotherwong.github.io/Resourcehosting/Q5B.png');
	enemySet5Photos[2] = loadImage('https://anotherwong.github.io/Resourcehosting/Q5C.png');
	enemySet5Photos[3] = loadImage('https://anotherwong.github.io/Resourcehosting/Q5D.png');
	enemySet5Photos[4] = loadImage('https://anotherwong.github.io/Resourcehosting/Q5Q.png');

	// set 5 enemies, no images, answer is 3
	enemySet5 = new EnemyManager(4,enemySet5Photos,true,1);
	enemySet5.setQuestion(enemySet5Photos[4],0,0);  // photo, x, y
	enemySet5.setKillOutOfScreen(400);
	enemySet5.setLengthHeight(63,40);
	enemySet5.setEnemySpacing(75);
	enemySet5.setEnemySpeed(1);
	
	enemySet6Photos[0] = loadImage('https://anotherwong.github.io/Resourcehosting/Q6A.png');
	enemySet6Photos[1] = loadImage('https://anotherwong.github.io/Resourcehosting/Q6B.png');
	enemySet6Photos[2] = loadImage('https://anotherwong.github.io/Resourcehosting/Q6C.png');
	enemySet6Photos[3] = loadImage('https://anotherwong.github.io/Resourcehosting/Q6D.png');
	enemySet6Photos[4] = loadImage('https://anotherwong.github.io/Resourcehosting/Q6Q.png');


	// set 5 enemies, no images, answer is 3
	enemySet6 = new EnemyManager(4,enemySet6Photos,true,1);
	enemySet6.setQuestion(enemySet6Photos[4],0,0);  // photo, x, y
	enemySet6.setKillOutOfScreen(400);
	enemySet6.setLengthHeight(63,40);
	enemySet6.setEnemySpacing(75);
	enemySet6.setEnemySpeed(1);
	
	enemySet7Photos[0] = loadImage('https://anotherwong.github.io/Resourcehosting/Q7A.png');
	enemySet7Photos[1] = loadImage('https://anotherwong.github.io/Resourcehosting/Q7B.png');
	enemySet7Photos[2] = loadImage('https://anotherwong.github.io/Resourcehosting/Q7C.png');
	enemySet7Photos[3] = loadImage('https://anotherwong.github.io/Resourcehosting/Q7D.png');
	enemySet7Photos[4] = loadImage('https://anotherwong.github.io/Resourcehosting/Q7Q.png');


	// set 5 enemies, no images, answer is 3
	enemySet7 = new EnemyManager(4,enemySet7Photos,true,1);
	enemySet7.setQuestion(enemySet7Photos[4],0,0);  // photo, x, y
	enemySet7.setKillOutOfScreen(400);
	enemySet7.setLengthHeight(63,40);
	enemySet7.setEnemySpacing(75);
	enemySet7.setEnemySpeed(1);

}

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
		if (gameState == -1 && enemySet1.isAnswerAlive() == false)
		{
			// if answer has reach the base
			console.log('answer is shot, enemies have reached base');
			enemySet1.endQuestion();
			enemySet2.startEnemies();
			score.addScore(10);

		}
		else if (gameState == 1 && enemySet1.isAnswerAlive() == true)
		{
			// if enemies have reach the base
			console.log('answer is alive, enemies have reached base');

			enemySet1.endQuestion();
			enemySet2.startEnemies();
			healthBar.deductHealth(50);

		}
	}
	// END QUESTION 1 ----------------------------------------------------------


	// START QUESTION 2 --------------------------------------------------------
	if (enemySet2.isQuestionFinished() == false)
	{
		// show the question
		enemySet2.drawQuestion();


		var gameState = enemySet2.drawEnemies(pm1);
		if (gameState == -1 && enemySet2.isAnswerAlive() == false)
		{
			enemySet2.endQuestion();
			enemySet3.startEnemies();
			score.addScore(10);
		}
		else if (gameState == 1 && enemySet2.isAnswerAlive() == true)
		{
			enemySet2.endQuestion();
			enemySet3.startEnemies();
			healthBar.deductHealth(50);
		}
	}
	// END QUESTION 2 ----------------------------------------------------------




	// START QUESTION 3 --------------------------------------------------------
	if (enemySet3.isQuestionFinished() == false)
	{
		// show the question
		enemySet3.drawQuestion();


		var gameState = enemySet3.drawEnemies(pm1);
		if (gameState == -1 && enemySet3.isAnswerAlive() == false)
		{
			enemySet3.endQuestion();
			enemySet4.startEnemies();
			score.addScore(10);
		}
		else if (gameState == 1 && enemySet3.isAnswerAlive() == true)
		{
			enemySet3.endQuestion();
			enemySet4.startEnemies();
			healthBar.deductHealth(50);
		}
	}
	// END QUESTION 3 ----------------------------------------------------------
	// --------------------------------- MODIFY CODE END ----------------------------------



	// manage projectiles - do not touch
	pm1.manageProjectile();


	// show health bar
	healthBar.showHealthBar();

	// show Score
	score.showScore();

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
