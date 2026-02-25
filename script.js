(function () {
  var yearNodes = document.querySelectorAll("#year");
  yearNodes.forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });

  var projectCards = Array.from(document.querySelectorAll(".project-card"));
  if (!projectCards.length) {
    return;
  }

  var state = {
    category: "all",
    capability: "all"
  };

  var countNode = document.getElementById("project-count");
  var chips = Array.from(document.querySelectorAll(".chip"));

  function matches(card, group, value) {
    if (value === "all") {
      return true;
    }

    var source = card.getAttribute("data-" + group) || "";
    return source.split(/\s+/).includes(value);
  }

  function applyFilters() {
    var visible = 0;

    projectCards.forEach(function (card) {
      var show = matches(card, "category", state.category) && matches(card, "capability", state.capability);
      card.hidden = !show;
      if (show) {
        visible += 1;
      }
    });

    if (countNode) {
      countNode.textContent = visible + " project" + (visible === 1 ? "" : "s") + " shown";
    }
  }

  function updateChipState(group, value) {
    chips.forEach(function (chip) {
      var chipGroup = chip.getAttribute("data-filter-group");
      if (chipGroup !== group) {
        return;
      }
      chip.classList.toggle("active", chip.getAttribute("data-filter") === value);
    });
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var group = chip.getAttribute("data-filter-group");
      var value = chip.getAttribute("data-filter");

      state[group] = value;
      updateChipState(group, value);
      applyFilters();
    });
  });

  applyFilters();
})();
