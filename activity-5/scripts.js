(function () {

   /*********************************
   * Package data and constructor objects
   *********************************/

  //package data array

  var data = [
    {
      name: "GitLens",
      description: "GitLens helps you visualize code authorship at a glance.",
      author: "Eric Amodio",
      url:
        "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",
      downloads: "8,400,221",
      stars: 422,
      price: "Free",
      selector: "p1",
    },
    {
      name: "CSS Peek",
      description:
        "Allow peeking to css ID and class strings as definitions from html files to CSS",
      author: "Pranay Prakash",
      url: "https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek",
      downloads: "1,702,749",
      stars: 66,
      price: "Free",
      selector: "p2",
    },
    {
      name: "Rainbow Brackets",
      description: "Provides rainbow colors for the round, square, and squiggly brackets",
      author: "2gua",
      url: "https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets",
      downloads: "812,012",
      stars: 69,
      price: 'Free',
      selector: "p3",
    },
  ];

  // vsc package constructor function

  function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
      return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
      return this.stars.toLocaleString();
    };
  }

  //Utility Functions

  var getTodaysDate = function(){
      var today = new Date();
      return today.toDateString();
  };
  var getEl = function(id){
      return document.getElementById(id);
  };

  var writePackageInfo = function(package){

      var selector = package.selector,
      nameEl = getEl(selector + '-name'),
      descEl = getEl(selector + '-description'),
      authEl = getEl(selector + '-author'),
      downloadEl = getEl(selector + '-downloads'),
      starsEl = getEl(selector + '-stars');

      //write package data to DOM elements

      nameEl.textContent = package.name;
      descEl.textContent = package.description;
      authEl.textContent = package.author;
      downloadEl.textContent = package.getFormattedDownloads();
      starsEl.textContent = package.getFormattedStars();
  };

  //Write date
  dateEl = getEl('date');
  dateEl.textContent = getTodaysDate();

  //Write package data one-by-one
  var gitLens = new Package(data[0]);
  writePackageInfo(gitLens);

  var cssPeak = new Package(data[1]);
  writePackageInfo(cssPeak);

  var rainbowBrackets = new Package(data[2]);
  writePackageInfo(rainbowBrackets);

})();