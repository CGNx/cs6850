$(function() {
      window.onclick = function(e) { 
            if (e.button == 2) return false; 
      };

  var width = 574,
      height = 574;

  var x = [[66.1774568267,496.609460025],
[673.824935584,152.030138133],
[797.422228585,0.669736291335],
[66.3373688748,494.935119297],
[797.447268482,494.935119297],
[796.076489069,0.669736291335],
[797.508596353,0.669736291335],
[270.284171975,404.520719967],
[673.799592819,153.369610716],
[262.840076354,393.135203014],
[236.504247632,404.185851821],
[796.094774924,0.669736291335],
[797.422228917,0.0],
[673.85907694,90.4143993303],
[799.997333956,3.01381331101],
[66.3373118062,494.935119297],
[797.44003201,495.939723734],
[66.244065249,444.370029301],
[797.44003203,496.609460025],
[66.1774940182,496.609460025],
[673.835675636,92.0887400586],
[262.989987157,394.474675596],
[262.989988089,393.804939305],
[797.665392035,0.334868145668],
[66.3388929185,496.274591879],
[66.3388977616,496.609460025],
[270.284170867,404.855588112],
[262.989988425,393.470071159],
[799.999997828,0.669736291335],
[270.316979667,403.181247384],
[66.1333460614,496.609460025],
[66.1333444742,496.274591879],
[262.989989259,394.809543742],
[262.989988558,395.144411888],
[673.817824127,152.030138133],
[673.85494727,91.7538719129],
[796.083130752,1.004604437],
[796.083153898,1.004604437],
[66.2371792371,444.370029301],
[796.309028127,0.334868145668],
[262.840042885,393.135203014],
[262.989989441,393.135203014],
[285.829556668,329.510255337],
[66.3389018789,495.939723734],
[270.284171411,404.185851821],
[285.826120841,329.845123483],
[270.270255761,396.818752616],
[262.989989662,394.139807451],
[797.47551226,153.369610716],
[673.889643459,151.025533696],
[797.458645611,442.695688573],
[262.394795126,394.474675596],
[673.810904076,153.369610716],
[262.990004198,392.800334868],
[285.818795341,330.179991628],
[797.684057291,0.334868145668],
[673.83995858,92.0887400586],
[673.839987317,92.0887400586],
[263.059108155,392.800334868],
[673.806870207,153.704478861],
[797.464604861,403.181247384],
[797.48532975,90.4143993303],
[285.829616232,329.510255337],
[66.3003765216,444.035161155],
[263.059169684,392.800334868],
[797.453716821,443.70029301],
[796.309028199,0.0],
[270.29226251,404.520719967],
[285.839347573,328.5056509],
[236.473365374,601.088321473],
[66.3003765838,443.70029301],
[673.859164024,90.4143993303],
[673.85602449,90.4143993303],
[261.846916137,395.144411888],
[796.346858464,1.33947258267],
[263.058521759,392.800334868],
[263.058570063,392.800334868],
[797.46754835,393.135203014],
[797.462020355,404.855588112],
[797.462020689,404.185851821],
[797.422228131,1.33947258267],
[261.835999371,393.470071159],
[261.835999251,395.144411888],
[66.1271798068,546.839681875],
[797.508596272,0.0],
[797.470200728,329.845123483],
[262.405035211,394.139807451],
[263.058087215,392.800334868],
[262.267955229,395.144411888],
[797.467513347,394.474675596],
[797.46752324,393.470071159],
[797.467513234,394.139807451],
[797.482845122,92.0887400586],
[270.28885406,404.855588112],
[797.421198085,3.01381331101],
[261.836,392.800334868],
[261.836010309,393.804939305],
[66.1333438775,495.939723734],
[797.470200413,329.510255337],
[260.569315728,439.681875262],
[66.2987433634,442.695688573],
[66.2986975758,442.695688573],
[236.520033964,404.855588112],
[236.520034602,404.520719967],
[261.83601109,394.809543742],
[673.799594057,153.03474257],
[66.3431191137,550.858099623],
[0.00215611712227,495.939723734],
[0.00215535412197,496.274591879],
[236.52003468,404.185851821],
[66.2049975523,494.935119297],
[263.058068249,392.800334868],
[797.491693618,1.33947258267],
[797.453716929,444.035161155],
[66.343119667,551.192967769],
[0.00215612533512,496.609460025],
[796.309027765,1.33947258267],
[797.440032468,496.274591879],
[797.437659284,3.01381331101],
[66.3431197883,550.523231478],
[797.422228419,0.334868145668],
[797.560112617,1.004604437],
[797.560161708,1.004604437],
[673.835675077,91.7538719129],
[262.332945559,394.809543742],
[797.467545867,392.800334868],
[236.490817671,601.088321473],
[262.405000506,394.139807451],
[796.34683797,1.33947258267],
[262.332925616,394.809543742],
[263.002846465,392.800334868],
[797.470200449,330.179991628],
[796.060795145,151.025533696],
[270.302180949,404.185851821],
[259.836146384,439.681875262],
[66.2371792371,443.70029301],
[261.835999166,393.135203014],
[0.0,719.966513185],
[796.308056256,3.01381331101],
[796.076505848,0.0],
[796.082517642,0.669736291335],
[799.999995442,1.004604437],
[800.0,0.0],
[263.002923474,392.800334868],
[796.076488882,0.334868145668],
[261.835996497,394.139807451],
[4.21107285603e-07,720.636249477],
[236.517716073,403.181247384],
[799.999994962,1.33947258267],
[797.64095598,0.334868145668],
[673.795625046,391.460862285],
[673.816072453,153.03474257],
[261.835995881,394.474675596],
[3.42528851561e-06,720.301381331],
[262.663330098,393.804939305],
[66.1963352119,496.274591879],
[796.094774847,1.33947258267],
[797.491723869,0.334868145668],
[66.2012289943,495.939723734],
[796.076488955,1.33947258267],
[236.492599822,550.858099623],
[285.818793978,329.845123483],
[285.818795332,329.510255337],
[285.826056683,329.845123483],
[66.1688867408,495.939723734],
[262.697730911,393.470071159],
[192.850861001,601.088321473],
[285.815856917,439.681875262],
[796.094774849,0.0],
[236.492600866,551.192967769],
[236.49260044,550.523231478],
[796.309028147,1.004604437],
[797.467512838,395.144411888],
[66.3003760386,444.370029301],
[261.408914749,536.45876936],
[236.513677696,403.181247384],
[262.25340811,395.144411888],
[285.85190474,328.5056509],
[796.094775048,0.334868145668],
[673.815261432,153.03474257],
[285.822643237,330.179991628],
[796.093948236,3.01381331101],
[797.462020177,404.520719967],
[797.422228261,1.004604437],
[673.835676265,91.4190037673],
[285.822713017,330.179991628],
[673.810880045,153.369610716],
[262.663289119,393.804939305],
[262.332044297,394.809543742],
[797.467512989,394.809543742],
[796.309028212,0.669736291335],
[796.345766893,1.33947258267],
[262.394761128,394.474675596],
[797.475512042,153.704478861],
[66.2743266062,442.695688573],
[799.999998494,0.334868145668],
[236.504247247,404.520719967],
[262.331990881,394.809543742],
[797.453716396,444.370029301],
[797.472405767,328.5056509],
[236.499717208,403.181247384],
[66.1457217016,494.935119297],
[797.5085889,1.004604437],
[797.491724051,0.669736291335],
[66.2725747772,444.035161155],
[66.2715967367,443.70029301],
[797.475512154,153.03474257],
[66.3340420233,494.935119297],
[797.508596587,0.334868145668],
[797.480417501,152.030138133],
[797.482845435,91.7538719129],
[236.50498156,403.181247384],
[673.823147387,152.030138133],
[263.019721814,393.470071159],
[796.076489086,1.004604437],
[797.482874059,91.4190037673],
[796.09477474,1.004604437],
[797.508588585,1.33947258267],
[66.1688859723,496.274591879],
[66.1688853246,496.609460025],
[797.467521307,393.804939305],
[673.854166735,91.4190037673],
[797.491694104,1.004604437],
[797.491724253,0.0],
[797.50779793,3.01381331101],
[66.23717928,444.035161155],
[236.504257313,404.855588112],
[796.082540739,0.669736291335],
[673.799593336,153.704478861]];

  for (var i = 0; i < x.length; i++) {
      x[i][0] = x[i][0] * (width -10) / 800;
      x[i][1] = x[i][1] * (height-10) / 800;
  }

  var vertices = d3.range(x.length).map(function(d) {
    return x[d];
  }
  );

  console.log(vertices);

  var voronoi = d3.geom.voronoi()
      .clipExtent([[0, 0], [width, height]]);

  var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height)
      .on("mousemove", function() { vertices[0] = d3.mouse(this); redraw(); });

  var path = svg.append("g").selectAll("path");

  svg.selectAll("circle")
      .data(vertices.slice(1))
    .enter().append("circle")
      .attr("transform", function(d) { return "translate(" + d + ")"; })
      .attr("r", 1.5);

  redraw();

  function redraw() {
    path = path
        .data(voronoi(vertices), polygon);

    path.exit().remove();

    path.enter().append("path")
        .attr("class", function(d, i) { return "q" + (i % 9) + "-9"; })
        .attr("d", polygon);

    path.order();
  }

  function polygon(d) {
    return "M" + d.join("L") + "Z";
  }


});