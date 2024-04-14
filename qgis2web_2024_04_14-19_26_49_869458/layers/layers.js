var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_harare_roads_1 = new ol.format.GeoJSON();
var features_harare_roads_1 = format_harare_roads_1.readFeatures(json_harare_roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_harare_roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_harare_roads_1.addFeatures(features_harare_roads_1);
var lyr_harare_roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_harare_roads_1, 
                style: style_harare_roads_1,
                popuplayertitle: "harare_roads",
                interactive: true,
                title: '<img src="styles/legend/harare_roads_1.png" /> harare_roads'
            });
var format_railway_2 = new ol.format.GeoJSON();
var features_railway_2 = format_railway_2.readFeatures(json_railway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_2.addFeatures(features_railway_2);
var lyr_railway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_2, 
                style: style_railway_2,
                popuplayertitle: "railway",
                interactive: true,
                title: '<img src="styles/legend/railway_2.png" /> railway'
            });
var format_contours_3 = new ol.format.GeoJSON();
var features_contours_3 = format_contours_3.readFeatures(json_contours_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contours_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contours_3.addFeatures(features_contours_3);
var lyr_contours_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_contours_3, 
                style: style_contours_3,
                popuplayertitle: "contours",
                interactive: true,
                title: '<img src="styles/legend/contours_3.png" /> contours'
            });
var format_points_4 = new ol.format.GeoJSON();
var features_points_4 = format_points_4.readFeatures(json_points_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_4.addFeatures(features_points_4);
var lyr_points_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_points_4, 
                style: style_points_4,
                popuplayertitle: "points",
                interactive: true,
                title: '<img src="styles/legend/points_4.png" /> points'
            });
var format_existing_parking_sites_location_5 = new ol.format.GeoJSON();
var features_existing_parking_sites_location_5 = format_existing_parking_sites_location_5.readFeatures(json_existing_parking_sites_location_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_existing_parking_sites_location_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_existing_parking_sites_location_5.addFeatures(features_existing_parking_sites_location_5);
var lyr_existing_parking_sites_location_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_existing_parking_sites_location_5, 
                style: style_existing_parking_sites_location_5,
                popuplayertitle: "existing_parking_sites_location",
                interactive: true,
                title: '<img src="styles/legend/existing_parking_sites_location_5.png" /> existing_parking_sites_location'
            });
var format_Harare_CBD_Boundary_6 = new ol.format.GeoJSON();
var features_Harare_CBD_Boundary_6 = format_Harare_CBD_Boundary_6.readFeatures(json_Harare_CBD_Boundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Harare_CBD_Boundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Harare_CBD_Boundary_6.addFeatures(features_Harare_CBD_Boundary_6);
var lyr_Harare_CBD_Boundary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Harare_CBD_Boundary_6, 
                style: style_Harare_CBD_Boundary_6,
                popuplayertitle: "Harare_CBD_Boundary",
                interactive: true,
                title: '<img src="styles/legend/Harare_CBD_Boundary_6.png" /> Harare_CBD_Boundary'
            });
var format_road_condition_map_7 = new ol.format.GeoJSON();
var features_road_condition_map_7 = format_road_condition_map_7.readFeatures(json_road_condition_map_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_condition_map_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_condition_map_7.addFeatures(features_road_condition_map_7);
var lyr_road_condition_map_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_condition_map_7, 
                style: style_road_condition_map_7,
                popuplayertitle: "road_condition_map",
                interactive: true,
    title: 'road_condition_map<br />\
    <img src="styles/legend/road_condition_map_7_0.png" /> very bad<br />\
    <img src="styles/legend/road_condition_map_7_1.png" /> bad<br />\
    <img src="styles/legend/road_condition_map_7_2.png" /> medium<br />\
    <img src="styles/legend/road_condition_map_7_3.png" /> good<br />\
    <img src="styles/legend/road_condition_map_7_4.png" /> very good<br />'
        });
var format_suitablelocationsforparkingstations_8 = new ol.format.GeoJSON();
var features_suitablelocationsforparkingstations_8 = format_suitablelocationsforparkingstations_8.readFeatures(json_suitablelocationsforparkingstations_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_suitablelocationsforparkingstations_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_suitablelocationsforparkingstations_8.addFeatures(features_suitablelocationsforparkingstations_8);
var lyr_suitablelocationsforparkingstations_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_suitablelocationsforparkingstations_8, 
                style: style_suitablelocationsforparkingstations_8,
                popuplayertitle: "suitable locations for parking stations",
                interactive: true,
    title: 'suitable locations for parking stations<br />\
    <img src="styles/legend/suitablelocationsforparkingstations_8_0.png" /> not suitable<br />\
    <img src="styles/legend/suitablelocationsforparkingstations_8_1.png" /> suitable<br />\
    <img src="styles/legend/suitablelocationsforparkingstations_8_2.png" /> more suitable<br />'
        });
var format_suitability_for_parking_station_1_9 = new ol.format.GeoJSON();
var features_suitability_for_parking_station_1_9 = format_suitability_for_parking_station_1_9.readFeatures(json_suitability_for_parking_station_1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_suitability_for_parking_station_1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_suitability_for_parking_station_1_9.addFeatures(features_suitability_for_parking_station_1_9);
var lyr_suitability_for_parking_station_1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_suitability_for_parking_station_1_9, 
                style: style_suitability_for_parking_station_1_9,
                popuplayertitle: "suitability_for_parking_station_1",
                interactive: true,
    title: 'suitability_for_parking_station_1<br />\
    <img src="styles/legend/suitability_for_parking_station_1_9_0.png" /> low<br />\
    <img src="styles/legend/suitability_for_parking_station_1_9_1.png" /> medium<br />\
    <img src="styles/legend/suitability_for_parking_station_1_9_2.png" /> high<br />\
    <img src="styles/legend/suitability_for_parking_station_1_9_3.png" /> very high<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_harare_roads_1.setVisible(true);lyr_railway_2.setVisible(true);lyr_contours_3.setVisible(true);lyr_points_4.setVisible(true);lyr_existing_parking_sites_location_5.setVisible(true);lyr_Harare_CBD_Boundary_6.setVisible(true);lyr_road_condition_map_7.setVisible(true);lyr_suitablelocationsforparkingstations_8.setVisible(true);lyr_suitability_for_parking_station_1_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_harare_roads_1,lyr_railway_2,lyr_contours_3,lyr_points_4,lyr_existing_parking_sites_location_5,lyr_Harare_CBD_Boundary_6,lyr_road_condition_map_7,lyr_suitablelocationsforparkingstations_8,lyr_suitability_for_parking_station_1_9];
lyr_harare_roads_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', 'Shape_Leng': 'Shape_Leng', });
lyr_railway_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_contours_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Contour': 'Contour', 'Shape_Leng': 'Shape_Leng', });
lyr_points_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_existing_parking_sites_location_5.set('fieldAliases', {'Id': 'Id', });
lyr_Harare_CBD_Boundary_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_road_condition_map_7.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'road_condi': 'road condition', 'Road_manta': 'Road_manta', });
lyr_suitablelocationsforparkingstations_8.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_suitability_for_parking_station_1_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_harare_roads_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'maxspeed': 'Range', 'Shape_Leng': 'TextEdit', });
lyr_railway_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_contours_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Contour': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_points_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_existing_parking_sites_location_5.set('fieldImages', {'Id': 'Range', });
lyr_Harare_CBD_Boundary_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_road_condition_map_7.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'road_condi': 'TextEdit', 'Road_manta': 'TextEdit', });
lyr_suitablelocationsforparkingstations_8.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_suitability_for_parking_station_1_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_harare_roads_1.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'name': 'inline label - always visible', 'ref': 'no label', 'type': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', 'Shape_Leng': 'no label', });
lyr_railway_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - always visible', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_contours_3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Contour': 'inline label - always visible', 'Shape_Leng': 'no label', });
lyr_points_4.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'header label - always visible', });
lyr_existing_parking_sites_location_5.set('fieldLabels', {'Id': 'inline label - always visible', });
lyr_Harare_CBD_Boundary_6.set('fieldLabels', {'OBJECTID': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'inline label - always visible', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_road_condition_map_7.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'road_condi': 'inline label - always visible', 'Road_manta': 'header label - always visible', });
lyr_suitablelocationsforparkingstations_8.set('fieldLabels', {'Id': 'no label', 'gridcode': 'inline label - visible with data', });
lyr_suitability_for_parking_station_1_9.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_suitability_for_parking_station_1_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});