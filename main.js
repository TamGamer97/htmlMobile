color = "none"
option = "none"
letter = "none"

function closeMenu()
{
    console.log("closing menyu")
    document.getElementById("MenuDiv").style.display = "none"
}

function OpenMenu()
{
    console.log("Opening menyu")
    document.getElementById("MenuDiv").style.display = "block"
}


function clickedCard(oName ,cardName)
{
    if(oName == "color")
    {
        color = cardName
        sessionStorage.setItem("color", cardName)
    }
    if(oName == "option")
    {
        option = cardName
        sessionStorage.setItem("option", cardName)
    }
    alert("You pressed " + cardName)
}

function changePage(ih)
{
    if(ih == "Select")
    {
        location.href = "/"
    }
    if(ih == "Recieve")
    {
        console.log(sessionStorage.getItem("color"))
        if(sessionStorage.getItem("color") == null)
        {
            console.log("no color")
            if(location.href == document.location.origin + "/")
            {
                alert("Pick the color")
                return
            }
            if(location.href == document.location.origin + "/edit.html")
            {
                location.href = "/"
                return
            }
        }
        if(sessionStorage.getItem("option") == null)
        {
            console.log("no option")
            if(location.href == document.location.origin + "/")
            {
                alert("Pick the options")
                return
            }
            if(location.href == document.location.origin + "/edit.html")
            {
                location.href = "/"
                return
            }
        }

        location.href = "/recieve.html"
    }
    if(ih == "Edit")
    {
        location.href = "/edit.html"
    }
    
}


function getAnswers()
{
    color = sessionStorage.getItem("color")
    option = sessionStorage.getItem("option")

    console.log(color + " " + option)

    document.getElementById("res").innerHTML = color + " " + option
}

function clearSessions()
{
    sessionStorage.clear();
}