/*
 * Treesheet
 * ---------
 * 
 * This file enables your Cloudstitch app to be injected into 
 * a page as a widget. To do so, simply include cloudstitch.js 
 * in the web page HEAD: 
 * 
 *   <script src="http://cloudstitch.io/release/cloudstitch.js></script>
 * 
 * And then invoke the widget like this:
 *
 *   <div widget="visualizations/shaded-usa-map"></div>
 *
 */

@html electoral-map-visualization //apps.cloudstitch.io/project-templates/electoral-map-visualization/widget.html;
@css relative(map.css);
@js relative(geometry.js);
@js relative(d3.min.js);
@js relative(map.js);
@gsheet sheet http://cloudstitch.io/project-templates/electoral-map-visualization/datasource/sheet;

body|*[widget="project-templates/electoral-map-visualization"] {"after": "electoralMapVisualization_PreInit"} :graft electoral-map-visualization|#electoral-map-visualization;
