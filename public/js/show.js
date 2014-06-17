var isTopKeywordsShown = false,
    isSubmissionShown = false,
    isTopSourcesShown = false;

$('#p0 .next').click(function() {
  if (isSubmissionShown) return;

  showSubmissionChart();
  isSubmissionShown = true;
});

$('#p1 .next').click(function() {
  if (isTopKeywordsShown) return;

  showTopKeywords();
  isTopKeywordsShown = true;
});

$('#p2 .next').click(function() {
  if (isTopSourcesShown) return;
  
  showTopSources();
  isTopSourcesShown = true;
});