<?php
include("SERVER/database.php");
include('translations/load_translations.php');
if (session_status() === PHP_SESSION_NONE)
  session_start();

?>


<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TH6M7HMG59"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-TH6M7HMG59');
  </script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <link rel="stylesheet" href="/CSS/index.css">
  <link rel="stylesheet" href="/CSS/common.css">
  <link rel="stylesheet" href="/CSS/common.css">


  <meta charset="utf-8" />
  <title>Zmejelov</title>
  <script type="text/javascript" src="Zmejelov_basic_game/phaser.min.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F0_shared.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F2_inicial.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F3_storyIntro.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F4_gamePlayStart.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F5_konec.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F2_time_intro.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F1_game.js"></script>
</head>

<body>

  <div id="loader-wrapper">
    <span class="loader"><img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Loading..."></span>
  </div>



  <script>
    function showLoader() {
      document.getElementById("loader-wrapper").style.display = "flex";

    }

    function hideLoader() {
      document.getElementById("loader-wrapper").style.display = "none";
      document.getElementById("fullBody").style.display = "block";


    }

    window.onload = function() {
      setTimeout(hideLoader, 500);
    };
    showLoader();
  </script>



  <div id="fullBody">
    <script>
      $(document).ready(function() {
        var username = "<?php echo isset($_SESSION["username"]) ? $_SESSION["username"] : ''; ?>";
        $("#header").load("SHARED/header.php?username=" + username);
        $("#footer").load("SHARED/footer.php");

      });
    </script>
    <div id="header"></div>


    <div class="introduction" id="introduction_OG">
      <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmeja col-10">
      <div class="introductionText">
        <p><b><span style="font-size: 50px;">CityZmentures</span></b> <?php $translations = loadTranslations();
                                                                      echo $translations["cityzmentures_intro"] ?></p>
      </div>
    </div>



    <div class="game">
      <div id="game_OG">
        <h1><?php $translations = loadTranslations();
            echo $translations['game'] ?></h1>
        <?php if (isset($_SESSION["username"])) : ?>
          <div id="gameContainerSpeedRunning"></div>
        <?php else : ?>
          <div class="gameContainerError" class="col-10">
            <p><?php $translations = loadTranslations();
                echo $translations['please_login'] ?> </p>
          </div>
        <?php endif; ?>
      </div>
    </div>

    <div class="speed_running_split">
      <div class="QnA_split">
        <h1>Q&N</h1>
        <div>
          <div class=" QN_field">
        <div class="question_field">
          <p><?php $translations = loadTranslations();
              echo $translations['q3_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a1b','a1bDiv')">&#9660;</button></span>
          </p>
        </div>
      </div>
      <div id="a1bDiv">
        <p id="a1b" style="display: none; "><?php $translations = loadTranslations();
                                            echo $translations['a1_OG'] ?></p>
      </div>
    </div>


    <div>
      <div class="QN_field">
        <div class="question_field">
          <p> <?php $translations = loadTranslations();
              echo $translations['q2_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a2b','a2bDiv')">&#9660;</button></span>
          </p>
        </div>
      </div>
      <div id="a2bDiv">
        <p id="a2b" style="display: none;"><?php $translations = loadTranslations();
                                            echo $translations['a2_OG'] ?></p>
      </div>
    </div>

    <div>
      <div class="QN_field">
        <div class="question_field">
          <p> <?php $translations = loadTranslations();
              echo $translations['q3_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a3b','a3bDiv')">&#9660;</button></span>
          </p>
        </div>
      </div>
      <div id="a3bDiv">
        <p id="a3b" style="display: none;"><?php $translations = loadTranslations();
                                            echo $translations['a3_OG'] ?></p>
      </div>
    </div>

    <div>
      <div class="QN_field">
        <div class="question_field">
          <p> <?php $translations = loadTranslations();
              echo $translations['q4_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a4b','a4bDiv')">&#9660;</button></span>
          </p>
        </div>
      </div>
      <div id="a4bDiv">
        <p id="a4b" style="display: none;"><?php $translations = loadTranslations();
                                            echo $translations['a4_OG'] ?></p>
      </div>
    </div>







  </div>

  <script>
    function toggleAnswerVisibilityZmentures(id, div) {
      var myEle = document.getElementById(id);
      var myDiv = document.getElementById(div);


      if (myEle.style.display === "none") {
        myEle.style.display = "inline";
        myEle.classList.add("answer-visible");
        myDiv.classList.add("answer-visible-div");

      } else {
        myEle.style.display = "none";
        myEle.classList.remove("answer-visible"); // Remove the CSS class
        myDiv.classList.remove("answer-visible-div"); // Remove the CSS class

      }
    }
  </script>

  <div id="leaderboard" class="leaderBoardSpeedRun">
    <h1>LEADERBOARD</h1>

    <div class="leaderboard_buttons">
      <form method="get" action="CityZmentures.php">
        <button type="submit" name="button20" class="leaderboard_button"> 20s</button>
        <button type="submit" name="button60" class="leaderboard_button">60s</button>
        <button type="submit" name="button120" class="leaderboard_button">120s</button>
      </form>

    </div>


    <div style="text-align: center;" >
      <?php
      // Retrieve the current page number from the URL
      $page = isset($_GET['page']) ? $_GET['page'] : 1;
      $commentsPerPage = 5;
      $offset = ($page - 1) * $commentsPerPage;

      // Calculate the starting player ranking for the current page
      $startingRank = ($page - 1) * $commentsPerPage + 1;

      if (isset($_GET['button60'])) {
        // Fetch leaderboard entries
        $sql = "SELECT * FROM leaderboard WHERE type = 2";
        $result = sqlsrv_query($conn, $sql);

        // Pagination
        $sqlCount = "SELECT COUNT(*) AS all_leaderboard FROM leaderboard WHERE type = 2";
        $resultCount = sqlsrv_query($conn, $sqlCount);
        $rowCount = sqlsrv_fetch_array($resultCount);
       // echo "<meta http-equiv=Refresh content=2;url=/CityZmentures.php#button60>";
      } elseif (isset($_GET['button120'])) {
        // Fetch leaderboard entries
        $sql = "SELECT * FROM leaderboard WHERE type = 3";
        $result = sqlsrv_query($conn, $sql);

        // Pagination
        $sqlCount = "SELECT COUNT(*) AS all_leaderboard FROM leaderboard WHERE type = 3";
        $resultCount = sqlsrv_query($conn, $sqlCount);
        $rowCount = sqlsrv_fetch_array($resultCount);
        //echo "<meta http-equiv=Refresh content=2;url=/CityZmentures.php#button120>";

      } else {
        // Fetch leaderboard entries
        $sql = "SELECT * FROM leaderboard WHERE type = 1";
        $result = sqlsrv_query($conn, $sql);

        // Pagination
        $sqlCount = "SELECT COUNT(*) AS all_leaderboard FROM leaderboard WHERE type = 1";
        $resultCount = sqlsrv_query($conn, $sqlCount);
        $rowCount = sqlsrv_fetch_array($resultCount);
        ///echo "<meta http-equiv=Refresh content=2;url=/CityZmentures.php#button20>";

      }

      $rows = [];
      while ($row = sqlsrv_fetch_array($result)) {
        $rows[] = $row;
      }

      // Custom time sorting function
      function customTimeSort($a, $b)
      {
        $dateA = $a['date'];
        $dateB = $b['date'];

        if ($dateA == $dateB) {
          return 0;
        }

        return ($dateA < $dateB) ? -1 : 1;
      }


      // Sort the rows
      usort($rows, 'customTimeSort');

      // Paginate the sorted results
      $paginatedRows = array_slice($rows, $offset, $commentsPerPage);

      // Display the sorted results with consistent player ranking
      echo '<div class="Leaderbord_result">';
      foreach ($paginatedRows as $row) {
        echo '<div><span ><a href="user.php?user=' . urlencode($row["user"]) . '">' . $startingRank . " " . $row["user"] . '</a> (' . $row["date"]->format('Y-m-d H:i:s') . '):</span><br><span class="">' . $row["score"] . '</span></div><br><br>';
        $startingRank++; // Increment the player ranking
      }
      echo '</div>';
      // Pagination;
      $totalComments = $rowCount['all_leaderboard'];
      $totalPages = ceil($totalComments / $commentsPerPage);

      echo '<div class="pagination">';
      for ($i = 1; $i <= $totalPages; $i++) {
        echo '<a href="?  =' . $i . '#leaderboard">' . $i . '</a> ';
      }
      echo '</div>';

      ?>
    </div>



  </div>

  </div>


  <script>
    function toggleAnswerVisibility(id) {
      var myEle = document.getElementById(id);
      if (myEle.style.display === "none") {
        myEle.style.display = "inline";
        myEle.classList.add("answer-visible"); // Add the CSS class
      } else {
        myEle.style.display = "none";
        myEle.classList.remove("answer-visible"); // Remove the CSS class
      }
    }
  </script>

  <div class="achievementsMainBlock" id="dosezki_OG">
    <h1><?php $translations = loadTranslations();
        echo $translations['achivements'] ?></h1>
    <?php if (isset($_SESSION["username"])) : ?>
      <div class="achievements">
        <?php
        $translations = loadTranslations();
        if ($_SESSION["achievements"][9] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<p class="ach_num">50</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["50"] . '</p></b>';
          echo '<p>' . $translations["50e"] . '</p>';
          echo '</div>';
          echo '</div>';
        } else {
          echo "<div class='achievementsNotLoggedIn'>";
          echo '<p class="ach_num">50</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["50"] . '</p></b>';
          echo '</div>';
          echo '</div>';
        }
        ?>

        <?php
        $translations = loadTranslations();
        if ($_SESSION["achievements"][10] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<p class="ach_num">200</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["200"] . '</p></b>';
          echo '<p>' . $translations["200e"] . '</p>';
          echo '</div>';
          echo '</div>';
        } else {
          echo "<div class='achievementsNotLoggedIn'>";
          echo '<p class="ach_num">200</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["200"] . '</p></b>';
          echo '</div>';
          echo '</div>';
        }
        ?>

        <?php
        $translations = loadTranslations();
        if ($_SESSION["achievements"][11] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<p class="ach_num">500</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["500"] . '</p></b>';
          echo '<p>' . $translations["500e"] . '</p>';
          echo '</div>';
          echo '</div>';
        } else {
          echo "<div class='achievementsNotLoggedIn'>";
          echo '<p class="ach_num">500</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["500"] . '</p></b>';
          echo '</div>';
          echo '</div>';
        }
        ?>

        <?php
        $translations = loadTranslations();

        if ($_SESSION["achievements"][12] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<p class="ach_num">1000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["1000"] . '</p></b>';
          echo '<p>' . $translations["1000e"] . '</p>';
          echo '</div>';
          echo '</div>';
        } else {
          echo "<div class='achievementsNotLoggedIn'>";
          echo '<p class="ach_num">1000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["1000"] . '</p></b>';
          echo '</div>';
          echo '</div>';
        }
        ?>

        <?php
        $translations = loadTranslations();

        if ($_SESSION["achievements"][13] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<p class="ach_num">5000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["5000"] . '</p></b>';
          echo '<p>' . $translations["5000e"] . '</p>';
          echo '</div>';
          echo '</div>';
        } else {
          echo "<div class='achievementsNotLoggedIn'>";
          echo '<p class="ach_num">5000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["5000"] . '</p></b>';
          echo '</div>';
          echo '</div>';
        }
        ?>

        <?php
        $translations = loadTranslations();
        if ($_SESSION["achievements"][14] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<p class="ach_num">10000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["10000"] . '</p></b>';
          echo '<p>' . $translations["10000e"] . '</p>';
          echo '</div>';
          echo '</div>';
        } else {
          echo "<div class='achievementsNotLoggedIn'>";
          echo '<p class="ach_num">10000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["10000"] . '</p></b>';
          echo '</div>';
          echo '</div>';
        }
        ?>

<?php
        $translations = loadTranslations();
        if ($_SESSION["achievements"][15] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<p class="ach_num">25000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["25000"] . '</p></b>';
          echo '<p>' . $translations["25000e"] . '</p>';
          echo '</div>';
          echo '</div>';
        } else {
          echo "<div class='achievementsNotLoggedIn'>";
          echo '<p class="ach_num">25000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["25000"] . '</p></b>';
          echo '</div>';
          echo '</div>';
        }
        ?>


      </div>
    <?php else : ?>
      <div>
        <p>
        <p><?php $translations = loadTranslations();
            echo $translations['please_login_achivements'] ?></p>
        </p>
      </div>
    <?php endif; ?>







  </div>

  <div class="comments_DIV" id="comments_city">
    <?php if (isset($_SESSION["username"])) : ?>
      <h1><?php
          echo $translations["KOMENTARJI"] ?></h1>
      <div>
        <div class="alignCommentAdd">
          <form action="CityZmentures.php" method="GET" class="commentsForm">
            <textarea name="addCommentZmejelov" id="addCommentZmejelov" placeholder="<?php
                                                                                      echo $translations["write_comment"]; ?>" rows="6" cols="50"></textarea>
            <div class="submitButtonClass"><button type="submit" name="submitCommentZmejelov" id="submitCommentZmejelov" class="submitCommentButton">Post Comment</button>
            </div>
        </div>
        </form>
      </div>


    <?php else : ?>
      <div class="commentsFormError">
        <h1><?php
            echo $translations["KOMENTARJI"] ?></h1>
        <p class="commentsFormErrorText">za komentiranje se prijavi</p>
      </div>
    <?php endif; ?>
    <?php
    // Define the number of comments per page
    $commentsPerPage = 3;

    // Calculate the current page number
    $page = isset($_GET['page']) ? $_GET['page'] : 1;

    // Calculate the SQL LIMIT for pagination
    $offset = ($page - 1) * $commentsPerPage;

    // Query to fetch comments for the current page
    $sql = "
WITH PaginationCTE AS (
    SELECT *, ROW_NUMBER() OVER (ORDER BY date DESC) AS RowNum
    FROM comments
    WHERE type = 3

)
SELECT *
FROM PaginationCTE
WHERE RowNum BETWEEN ? AND ?";

    // Prepare the statement
    $stmt = sqlsrv_prepare($conn, $sql, array($offset, $commentsPerPage));

    // Execute the statement
    try {
      $result = sqlsrv_execute($stmt);

      if ($result === false) {
        echo "Error fetching comments: " . print_r(sqlsrv_errors(), true);
        exit();
      }


      // Display comments
      echo '<div id="comment_section" class="commentsZmejelov">';
      while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
        echo '<div class="full_comment">
            <span class="commentAuthor"> 
            <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" style="width: 40px; height: 50px; background-color: #605966; border-radius: 100%;">
            <a href="user.php?user=' . urlencode($row["user"]) . '">' . $row["user"] . '</a> (' . $row["date"]->format('Y-m-d H:i:s') . '):
            </span><span class="commentText"><br>' . $row["comment"] . '</div><br><br></span>';
      }
      echo '</div>';
    } catch (Exception $e) {
      // Handle the exception
      echo 'Caught exception: ',  $e->getMessage(), "\n";
    }


    // Query to count total number of comments
    $totalCommentsQuery = "SELECT COUNT(*) AS total FROM comments WHERE type=3";
    $totalCommentsResult = sqlsrv_query($conn, $totalCommentsQuery);
    $totalCommentsRow = sqlsrv_fetch_array($totalCommentsResult);
    $totalComments = $totalCommentsRow['total'];


    if ($totalComments != 0) {
    

      // Calculate total number of pages
      $totalPages = ceil($totalComments / $commentsPerPage);

      // Display pagination links
      echo '<div class="pagination-container">';
      echo '<div class="pagination">';
      for ($i = 1; $i <= $totalPages; $i++) {
        // Add onclick event to each pagination link to scroll to the comment section
        echo '<a href="CityZmentures.php?page=' . $i . '#comments_city">' . $i . "&nbsp;   "  . '</a>';
      }
      echo '</div>';
      echo '</div>';
    }


    ?>

  </div>

  </div>
  <div id="footer"></div>
</body>



</html>



<?php
if (isset($_GET["submitCommentZmejelov"])) {
  if (isset($_GET["addCommentZmejelov"])) {
    $user = $_SESSION["username"];
    $comment = $_GET["addCommentZmejelov"];

    // Prepare the SQL statement with placeholders
    $sql = "INSERT INTO comments ([user], comment, date, type) VALUES (?, ?, GETDATE(), 3)";

    // Prepare the statement
    $stmt = sqlsrv_prepare($conn, $sql, array(&$user, &$comment));

    if ($stmt) {
      if (sqlsrv_execute($stmt)) {
        echo "<meta http-equiv=Refresh content=2;url=/CityZmentures.php#comments_city>";
      } else {
        echo "Error executing statement: " . print_r(sqlsrv_errors(), true);
      }
    } else {
      echo "Error preparing statement: " . print_r(sqlsrv_errors(), true);
    }
  }
}



?>