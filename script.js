$(document).ready(function () {
    console.log("jQuery is ready!");

    $("h2").css("color", "#0d6efd");
    $("#name").css("letter-spacing", "2px");
    $(".headline").css("font-style", "italic");

    $("#changeGreeting").click(function () {
        $("#greeting").text("Nice to see you here! Have a good day.");
        $(".headline").html("<strong>Codeforces Master</strong> and Computer Science student");
    });

    $("#darkTheme").click(function () {
        $("body").css({
            "background-color": "#121212",
            "color": "#f1f1f1"
        });
        $(".task").css("background-color", "#1f1f1f");
    });

    $("#lightTheme").click(function () {
        $("body").css({
            "background-color": "#f5f5f5",
            "color": "#333"
        });
        $(".task").css("background-color", "white");
    });

    $("#hideBtn").click(function () {
        $("#funFacts").hide();
    });

    $("#showBtn").click(function () {
        $("#funFacts").show();
    });

    $("#toggleBtn").click(function () {
        $("#funFacts").toggle();
    });

    $("#fadeOutBtn").click(function () {
        $(".gallery img").fadeOut();
    });

    $("#fadeInBtn").click(function () {
        $(".gallery img").fadeIn();
    });

    $("#fadeToggleBtn").click(function () {
        $(".gallery img").fadeToggle();
    });

    $(".panel-heading").click(function () {
        $(this).next(".panel").slideToggle();
    });

    $("#openAll").click(function () {
        $(".panel").slideDown();
    });

    $("#closeAll").click(function () {
        $(".panel").slideUp();
    });

    $("#addSkill").click(function () {
        const skill = $("#skillInput").val().trim();

        if (skill === "") {
            alert("Please enter a skill");
            return;
        }

        $("#skillList").append("<li>" + skill + "</li>");
        $("#skillInput").val("");
    });

    $("#prependSkill").click(function () {
        const skill = $("#skillInput").val().trim();

        if (skill === "") {
            alert("Please enter a skill");
            return;
        }

        $("#skillList").prepend("<li>" + skill + "</li>");
        $("#skillInput").val("");
    });

    $("#removeSkill").click(function () {
        $("#skillList li").last().remove();
    });

    $("#changeLink").click(function () {
        if ($("#socialLink").attr("href") === "https://github.com/alwoosh0") {
            $("#socialLink").attr("href", "https://codeforces.com/profile/Alwoosh");
            $("#socialLink").text("My Codeforces");
        } else {
            $("#socialLink").attr("href", "https://github.com/alwoosh0");
            $("#socialLink").text("My GitHub");
        }
    });

    $("#nameInput").on("input", function () {
        $("#nameOutput").text($(this).val());
    });

    $("#emailInput").on("input", function () {
        $("#emailOutput").text($(this).val());
    });

    let skillsShown = false;

    $("#animateSkills").click(function () {
        if (skillsShown) {
            $(".skill-fill").animate({ width: "0%" }, 1000);
        } else {
            $("#cppBar").animate({ width: "95%" }, 1000);
            $("#pythonBar").animate({ width: "75%" }, 1000);
            $("#javaBar").animate({ width: "65%" }, 1000);
            $("#htmlBar").animate({ width: "60%" }, 1000);
        }

        skillsShown = !skillsShown;
    });
});