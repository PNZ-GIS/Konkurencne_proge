var wms_layers = [];


        var lyr_BingAerial_0 = new ol.layer.Tile({
            'title': 'Bing Aerial',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Esritopo_2 = new ol.layer.Tile({
            'title': 'Esri topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Esrisatelit_3 = new ol.layer.Tile({
            'title': 'Esri satelit',
            'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_BarvniRGBortofotozdolinotalnegaintervalaDTI050mvD96ETRSkoordinatnemsistemu_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://prostor4.gov.si/ows2-m-pub/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "SI.GURS.ZPDZ:DOF050",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Barvni (RGB) ortofoto z dolžino talnega intervala (DTI) 0,50 m v D96/ETRS koordinatnem sistemu",
                            opacity: 0.700000,
                            
                            
                          });
              wms_layers.push([lyr_BarvniRGBortofotozdolinotalnegaintervalaDTI050mvD96ETRSkoordinatnemsistemu_4, 0]);
var format_03_Kulturna_dediscina_5 = new ol.format.GeoJSON();
var features_03_Kulturna_dediscina_5 = format_03_Kulturna_dediscina_5.readFeatures(json_03_Kulturna_dediscina_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03_Kulturna_dediscina_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_Kulturna_dediscina_5.addFeatures(features_03_Kulturna_dediscina_5);
var lyr_03_Kulturna_dediscina_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_03_Kulturna_dediscina_5, 
                style: style_03_Kulturna_dediscina_5,
                interactive: true,
                title: '<img src="styles/legend/03_Kulturna_dediscina_5.png" /> 03_Kulturna_dediscina'
            });
var format_04_Natura_2000_D96_6 = new ol.format.GeoJSON();
var features_04_Natura_2000_D96_6 = format_04_Natura_2000_D96_6.readFeatures(json_04_Natura_2000_D96_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_Natura_2000_D96_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_Natura_2000_D96_6.addFeatures(features_04_Natura_2000_D96_6);
var lyr_04_Natura_2000_D96_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_04_Natura_2000_D96_6, 
                style: style_04_Natura_2000_D96_6,
                interactive: true,
                title: '<img src="styles/legend/04_Natura_2000_D96_6.png" /> 04_Natura_2000_D96'
            });
var format_14_VVO_dravni_nivo_7 = new ol.format.GeoJSON();
var features_14_VVO_dravni_nivo_7 = format_14_VVO_dravni_nivo_7.readFeatures(json_14_VVO_dravni_nivo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14_VVO_dravni_nivo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14_VVO_dravni_nivo_7.addFeatures(features_14_VVO_dravni_nivo_7);
var lyr_14_VVO_dravni_nivo_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_14_VVO_dravni_nivo_7, 
                style: style_14_VVO_dravni_nivo_7,
                interactive: true,
                title: '<img src="styles/legend/14_VVO_dravni_nivo_7.png" /> 14_VVO_državni_nivo'
            });
var format_15_VVO_obcinski_nivo_8 = new ol.format.GeoJSON();
var features_15_VVO_obcinski_nivo_8 = format_15_VVO_obcinski_nivo_8.readFeatures(json_15_VVO_obcinski_nivo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15_VVO_obcinski_nivo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15_VVO_obcinski_nivo_8.addFeatures(features_15_VVO_obcinski_nivo_8);
var lyr_15_VVO_obcinski_nivo_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_15_VVO_obcinski_nivo_8, 
                style: style_15_VVO_obcinski_nivo_8,
                interactive: true,
                title: '<img src="styles/legend/15_VVO_obcinski_nivo_8.png" /> 15_VVO_obcinski_nivo'
            });
var format_12_MariborMurskaSobotaVariantaB_9 = new ol.format.GeoJSON();
var features_12_MariborMurskaSobotaVariantaB_9 = format_12_MariborMurskaSobotaVariantaB_9.readFeatures(json_12_MariborMurskaSobotaVariantaB_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12_MariborMurskaSobotaVariantaB_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12_MariborMurskaSobotaVariantaB_9.addFeatures(features_12_MariborMurskaSobotaVariantaB_9);
var lyr_12_MariborMurskaSobotaVariantaB_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_12_MariborMurskaSobotaVariantaB_9, 
                style: style_12_MariborMurskaSobotaVariantaB_9,
                interactive: true,
                title: '<img src="styles/legend/12_MariborMurskaSobotaVariantaB_9.png" /> 12_Maribor-Murska Sobota Varianta B'
            });
var format_12_MariborMurskaSobotaVariantaA_10 = new ol.format.GeoJSON();
var features_12_MariborMurskaSobotaVariantaA_10 = format_12_MariborMurskaSobotaVariantaA_10.readFeatures(json_12_MariborMurskaSobotaVariantaA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12_MariborMurskaSobotaVariantaA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12_MariborMurskaSobotaVariantaA_10.addFeatures(features_12_MariborMurskaSobotaVariantaA_10);
var lyr_12_MariborMurskaSobotaVariantaA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_12_MariborMurskaSobotaVariantaA_10, 
                style: style_12_MariborMurskaSobotaVariantaA_10,
                interactive: true,
                title: '<img src="styles/legend/12_MariborMurskaSobotaVariantaA_10.png" /> 12_Maribor-Murska Sobota Varianta A'
            });
var format_10_TrstKoperPiranVariantaB2_11 = new ol.format.GeoJSON();
var features_10_TrstKoperPiranVariantaB2_11 = format_10_TrstKoperPiranVariantaB2_11.readFeatures(json_10_TrstKoperPiranVariantaB2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10_TrstKoperPiranVariantaB2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10_TrstKoperPiranVariantaB2_11.addFeatures(features_10_TrstKoperPiranVariantaB2_11);
var lyr_10_TrstKoperPiranVariantaB2_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_10_TrstKoperPiranVariantaB2_11, 
                style: style_10_TrstKoperPiranVariantaB2_11,
                interactive: true,
                title: '<img src="styles/legend/10_TrstKoperPiranVariantaB2_11.png" /> 10_ Trst-Koper-Piran Varianta B2'
            });
var format_10_TrstKoperPiranVariantaB1_12 = new ol.format.GeoJSON();
var features_10_TrstKoperPiranVariantaB1_12 = format_10_TrstKoperPiranVariantaB1_12.readFeatures(json_10_TrstKoperPiranVariantaB1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10_TrstKoperPiranVariantaB1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10_TrstKoperPiranVariantaB1_12.addFeatures(features_10_TrstKoperPiranVariantaB1_12);
var lyr_10_TrstKoperPiranVariantaB1_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_10_TrstKoperPiranVariantaB1_12, 
                style: style_10_TrstKoperPiranVariantaB1_12,
                interactive: true,
                title: '<img src="styles/legend/10_TrstKoperPiranVariantaB1_12.png" /> 10_ Trst-Koper-Piran Varianta B1'
            });
var format_10_TrstKoperPiranVariantaA_13 = new ol.format.GeoJSON();
var features_10_TrstKoperPiranVariantaA_13 = format_10_TrstKoperPiranVariantaA_13.readFeatures(json_10_TrstKoperPiranVariantaA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10_TrstKoperPiranVariantaA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10_TrstKoperPiranVariantaA_13.addFeatures(features_10_TrstKoperPiranVariantaA_13);
var lyr_10_TrstKoperPiranVariantaA_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_10_TrstKoperPiranVariantaA_13, 
                style: style_10_TrstKoperPiranVariantaA_13,
                interactive: true,
                title: '<img src="styles/legend/10_TrstKoperPiranVariantaA_13.png" /> 10_ Trst-Koper-Piran Varianta A '
            });
var format_9_LesceBledJezeroVariantaB2_14 = new ol.format.GeoJSON();
var features_9_LesceBledJezeroVariantaB2_14 = format_9_LesceBledJezeroVariantaB2_14.readFeatures(json_9_LesceBledJezeroVariantaB2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9_LesceBledJezeroVariantaB2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9_LesceBledJezeroVariantaB2_14.addFeatures(features_9_LesceBledJezeroVariantaB2_14);
var lyr_9_LesceBledJezeroVariantaB2_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_9_LesceBledJezeroVariantaB2_14, 
                style: style_9_LesceBledJezeroVariantaB2_14,
                interactive: true,
                title: '<img src="styles/legend/9_LesceBledJezeroVariantaB2_14.png" /> 9_Lesce-Bled Jezero Varianta B2'
            });
var format_9_LesceBledJezeroVariantaB1_15 = new ol.format.GeoJSON();
var features_9_LesceBledJezeroVariantaB1_15 = format_9_LesceBledJezeroVariantaB1_15.readFeatures(json_9_LesceBledJezeroVariantaB1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9_LesceBledJezeroVariantaB1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9_LesceBledJezeroVariantaB1_15.addFeatures(features_9_LesceBledJezeroVariantaB1_15);
var lyr_9_LesceBledJezeroVariantaB1_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_9_LesceBledJezeroVariantaB1_15, 
                style: style_9_LesceBledJezeroVariantaB1_15,
                interactive: true,
                title: '<img src="styles/legend/9_LesceBledJezeroVariantaB1_15.png" /> 9_Lesce-Bled Jezero Varianta B1'
            });
var format_9_LesceBledJezeroVariantaA_16 = new ol.format.GeoJSON();
var features_9_LesceBledJezeroVariantaA_16 = format_9_LesceBledJezeroVariantaA_16.readFeatures(json_9_LesceBledJezeroVariantaA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9_LesceBledJezeroVariantaA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9_LesceBledJezeroVariantaA_16.addFeatures(features_9_LesceBledJezeroVariantaA_16);
var lyr_9_LesceBledJezeroVariantaA_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_9_LesceBledJezeroVariantaA_16, 
                style: style_9_LesceBledJezeroVariantaA_16,
                interactive: true,
                title: '<img src="styles/legend/9_LesceBledJezeroVariantaA_16.png" /> 9_Lesce-Bled Jezero Varianta A'
            });
var format_8_LVVariantaDPredorZalogBrezovica_17 = new ol.format.GeoJSON();
var features_8_LVVariantaDPredorZalogBrezovica_17 = format_8_LVVariantaDPredorZalogBrezovica_17.readFeatures(json_8_LVVariantaDPredorZalogBrezovica_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_LVVariantaDPredorZalogBrezovica_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_LVVariantaDPredorZalogBrezovica_17.addFeatures(features_8_LVVariantaDPredorZalogBrezovica_17);
var lyr_8_LVVariantaDPredorZalogBrezovica_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8_LVVariantaDPredorZalogBrezovica_17, 
                style: style_8_LVVariantaDPredorZalogBrezovica_17,
                interactive: true,
                title: '<img src="styles/legend/8_LVVariantaDPredorZalogBrezovica_17.png" /> 8_LŽV Varianta D Predor Zalog - Brezovica'
            });
var format_8_LVVariantaCOptimiziranipredoriLV4_18 = new ol.format.GeoJSON();
var features_8_LVVariantaCOptimiziranipredoriLV4_18 = format_8_LVVariantaCOptimiziranipredoriLV4_18.readFeatures(json_8_LVVariantaCOptimiziranipredoriLV4_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_LVVariantaCOptimiziranipredoriLV4_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_LVVariantaCOptimiziranipredoriLV4_18.addFeatures(features_8_LVVariantaCOptimiziranipredoriLV4_18);
var lyr_8_LVVariantaCOptimiziranipredoriLV4_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8_LVVariantaCOptimiziranipredoriLV4_18, 
                style: style_8_LVVariantaCOptimiziranipredoriLV4_18,
                interactive: true,
                title: '<img src="styles/legend/8_LVVariantaCOptimiziranipredoriLV4_18.png" /> 8_LŽV Varianta C Optimizirani predori LŽV 4'
            });
var format_8_LVVariantaBVzhodnojunaobvoznica_19 = new ol.format.GeoJSON();
var features_8_LVVariantaBVzhodnojunaobvoznica_19 = format_8_LVVariantaBVzhodnojunaobvoznica_19.readFeatures(json_8_LVVariantaBVzhodnojunaobvoznica_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_LVVariantaBVzhodnojunaobvoznica_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_LVVariantaBVzhodnojunaobvoznica_19.addFeatures(features_8_LVVariantaBVzhodnojunaobvoznica_19);
var lyr_8_LVVariantaBVzhodnojunaobvoznica_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8_LVVariantaBVzhodnojunaobvoznica_19, 
                style: style_8_LVVariantaBVzhodnojunaobvoznica_19,
                interactive: true,
                title: '<img src="styles/legend/8_LVVariantaBVzhodnojunaobvoznica_19.png" /> 8_LŽV Varianta B Vzhodno-južna obvoznica'
            });
var format_8_LVVariantaASevernozahodnaobvoznica_20 = new ol.format.GeoJSON();
var features_8_LVVariantaASevernozahodnaobvoznica_20 = format_8_LVVariantaASevernozahodnaobvoznica_20.readFeatures(json_8_LVVariantaASevernozahodnaobvoznica_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_LVVariantaASevernozahodnaobvoznica_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_LVVariantaASevernozahodnaobvoznica_20.addFeatures(features_8_LVVariantaASevernozahodnaobvoznica_20);
var lyr_8_LVVariantaASevernozahodnaobvoznica_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8_LVVariantaASevernozahodnaobvoznica_20, 
                style: style_8_LVVariantaASevernozahodnaobvoznica_20,
                interactive: true,
                title: '<img src="styles/legend/8_LVVariantaASevernozahodnaobvoznica_20.png" /> 8_LŽV Varianta A Severno-zahodna obvoznica'
            });
var format_4_BrnikCelovecVariantaB_21 = new ol.format.GeoJSON();
var features_4_BrnikCelovecVariantaB_21 = format_4_BrnikCelovecVariantaB_21.readFeatures(json_4_BrnikCelovecVariantaB_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4_BrnikCelovecVariantaB_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_BrnikCelovecVariantaB_21.addFeatures(features_4_BrnikCelovecVariantaB_21);
var lyr_4_BrnikCelovecVariantaB_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4_BrnikCelovecVariantaB_21, 
                style: style_4_BrnikCelovecVariantaB_21,
                interactive: true,
                title: '<img src="styles/legend/4_BrnikCelovecVariantaB_21.png" /> 4_Brnik-Celovec Varianta B'
            });
var format_4_BrnikCelovecVariantaA_22 = new ol.format.GeoJSON();
var features_4_BrnikCelovecVariantaA_22 = format_4_BrnikCelovecVariantaA_22.readFeatures(json_4_BrnikCelovecVariantaA_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4_BrnikCelovecVariantaA_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_BrnikCelovecVariantaA_22.addFeatures(features_4_BrnikCelovecVariantaA_22);
var lyr_4_BrnikCelovecVariantaA_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4_BrnikCelovecVariantaA_22, 
                style: style_4_BrnikCelovecVariantaA_22,
                interactive: true,
                title: '<img src="styles/legend/4_BrnikCelovecVariantaA_22.png" /> 4_Brnik-Celovec Varianta A '
            });
var format_3_LjubljanaAjdovinaGoricaVariantaB_23 = new ol.format.GeoJSON();
var features_3_LjubljanaAjdovinaGoricaVariantaB_23 = format_3_LjubljanaAjdovinaGoricaVariantaB_23.readFeatures(json_3_LjubljanaAjdovinaGoricaVariantaB_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_LjubljanaAjdovinaGoricaVariantaB_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_LjubljanaAjdovinaGoricaVariantaB_23.addFeatures(features_3_LjubljanaAjdovinaGoricaVariantaB_23);
var lyr_3_LjubljanaAjdovinaGoricaVariantaB_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3_LjubljanaAjdovinaGoricaVariantaB_23, 
                style: style_3_LjubljanaAjdovinaGoricaVariantaB_23,
                interactive: true,
                title: '<img src="styles/legend/3_LjubljanaAjdovinaGoricaVariantaB_23.png" /> 3_Ljubljana-Ajdovščina-Gorica Varianta B'
            });
var format_3_LjubljanaAjdovinaGoricaVariantaA_24 = new ol.format.GeoJSON();
var features_3_LjubljanaAjdovinaGoricaVariantaA_24 = format_3_LjubljanaAjdovinaGoricaVariantaA_24.readFeatures(json_3_LjubljanaAjdovinaGoricaVariantaA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_LjubljanaAjdovinaGoricaVariantaA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_LjubljanaAjdovinaGoricaVariantaA_24.addFeatures(features_3_LjubljanaAjdovinaGoricaVariantaA_24);
var lyr_3_LjubljanaAjdovinaGoricaVariantaA_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3_LjubljanaAjdovinaGoricaVariantaA_24, 
                style: style_3_LjubljanaAjdovinaGoricaVariantaA_24,
                interactive: true,
                title: '<img src="styles/legend/3_LjubljanaAjdovinaGoricaVariantaA_24.png" /> 3_Ljubljana-Ajdovščina-Gorica Varianta A'
            });
var format_2_Divaa_TriVariantaD_25 = new ol.format.GeoJSON();
var features_2_Divaa_TriVariantaD_25 = format_2_Divaa_TriVariantaD_25.readFeatures(json_2_Divaa_TriVariantaD_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_Divaa_TriVariantaD_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_Divaa_TriVariantaD_25.addFeatures(features_2_Divaa_TriVariantaD_25);
var lyr_2_Divaa_TriVariantaD_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_Divaa_TriVariantaD_25, 
                style: style_2_Divaa_TriVariantaD_25,
                interactive: true,
                title: '<img src="styles/legend/2_Divaa_TriVariantaD_25.png" /> 2_Divača_Tržič Varianta D'
            });
var format_2_DivaaTrstVariantaC_26 = new ol.format.GeoJSON();
var features_2_DivaaTrstVariantaC_26 = format_2_DivaaTrstVariantaC_26.readFeatures(json_2_DivaaTrstVariantaC_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_DivaaTrstVariantaC_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_DivaaTrstVariantaC_26.addFeatures(features_2_DivaaTrstVariantaC_26);
var lyr_2_DivaaTrstVariantaC_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_DivaaTrstVariantaC_26, 
                style: style_2_DivaaTrstVariantaC_26,
                interactive: true,
                title: '<img src="styles/legend/2_DivaaTrstVariantaC_26.png" /> 2_Divača Trst Varianta C'
            });
var format_2_DivaaKoper_27 = new ol.format.GeoJSON();
var features_2_DivaaKoper_27 = format_2_DivaaKoper_27.readFeatures(json_2_DivaaKoper_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_DivaaKoper_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_DivaaKoper_27.addFeatures(features_2_DivaaKoper_27);
var lyr_2_DivaaKoper_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_DivaaKoper_27, 
                style: style_2_DivaaKoper_27,
                interactive: true,
                title: '<img src="styles/legend/2_DivaaKoper_27.png" /> 2_Divača-Koper'
            });
var format_2_LjubljanaDivaavariantaB_28 = new ol.format.GeoJSON();
var features_2_LjubljanaDivaavariantaB_28 = format_2_LjubljanaDivaavariantaB_28.readFeatures(json_2_LjubljanaDivaavariantaB_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_LjubljanaDivaavariantaB_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_LjubljanaDivaavariantaB_28.addFeatures(features_2_LjubljanaDivaavariantaB_28);
var lyr_2_LjubljanaDivaavariantaB_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_LjubljanaDivaavariantaB_28, 
                style: style_2_LjubljanaDivaavariantaB_28,
                interactive: true,
                title: '<img src="styles/legend/2_LjubljanaDivaavariantaB_28.png" /> 2_Ljubljana-Divača varianta B'
            });
var format_2_LjubljanaDivaavariantaA_29 = new ol.format.GeoJSON();
var features_2_LjubljanaDivaavariantaA_29 = format_2_LjubljanaDivaavariantaA_29.readFeatures(json_2_LjubljanaDivaavariantaA_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_LjubljanaDivaavariantaA_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_LjubljanaDivaavariantaA_29.addFeatures(features_2_LjubljanaDivaavariantaA_29);
var lyr_2_LjubljanaDivaavariantaA_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_LjubljanaDivaavariantaA_29, 
                style: style_2_LjubljanaDivaavariantaA_29,
                interactive: true,
                title: '<img src="styles/legend/2_LjubljanaDivaavariantaA_29.png" /> 2_Ljubljana-Divača varianta A'
            });
var format_1_empeterPragerskovariantaE_30 = new ol.format.GeoJSON();
var features_1_empeterPragerskovariantaE_30 = format_1_empeterPragerskovariantaE_30.readFeatures(json_1_empeterPragerskovariantaE_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_empeterPragerskovariantaE_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_empeterPragerskovariantaE_30.addFeatures(features_1_empeterPragerskovariantaE_30);
var lyr_1_empeterPragerskovariantaE_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_empeterPragerskovariantaE_30, 
                style: style_1_empeterPragerskovariantaE_30,
                interactive: true,
                title: '<img src="styles/legend/1_empeterPragerskovariantaE_30.png" /> 1_Šempeter-Pragersko varianta E'
            });
var format_1_GrobelnoPragerskoVariantaD_31 = new ol.format.GeoJSON();
var features_1_GrobelnoPragerskoVariantaD_31 = format_1_GrobelnoPragerskoVariantaD_31.readFeatures(json_1_GrobelnoPragerskoVariantaD_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_GrobelnoPragerskoVariantaD_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_GrobelnoPragerskoVariantaD_31.addFeatures(features_1_GrobelnoPragerskoVariantaD_31);
var lyr_1_GrobelnoPragerskoVariantaD_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_GrobelnoPragerskoVariantaD_31, 
                style: style_1_GrobelnoPragerskoVariantaD_31,
                interactive: true,
                title: '<img src="styles/legend/1_GrobelnoPragerskoVariantaD_31.png" /> 1_Grobelno-Pragersko Varianta D'
            });
var format_1_ZagorjeempeterVariantaC2_32 = new ol.format.GeoJSON();
var features_1_ZagorjeempeterVariantaC2_32 = format_1_ZagorjeempeterVariantaC2_32.readFeatures(json_1_ZagorjeempeterVariantaC2_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_ZagorjeempeterVariantaC2_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_ZagorjeempeterVariantaC2_32.addFeatures(features_1_ZagorjeempeterVariantaC2_32);
var lyr_1_ZagorjeempeterVariantaC2_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_ZagorjeempeterVariantaC2_32, 
                style: style_1_ZagorjeempeterVariantaC2_32,
                interactive: true,
                title: '<img src="styles/legend/1_ZagorjeempeterVariantaC2_32.png" /> 1_Zagorje-Šempeter Varianta C2'
            });
var format_1_ZagorjeCeljeVariantaC1_33 = new ol.format.GeoJSON();
var features_1_ZagorjeCeljeVariantaC1_33 = format_1_ZagorjeCeljeVariantaC1_33.readFeatures(json_1_ZagorjeCeljeVariantaC1_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_ZagorjeCeljeVariantaC1_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_ZagorjeCeljeVariantaC1_33.addFeatures(features_1_ZagorjeCeljeVariantaC1_33);
var lyr_1_ZagorjeCeljeVariantaC1_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_ZagorjeCeljeVariantaC1_33, 
                style: style_1_ZagorjeCeljeVariantaC1_33,
                interactive: true,
                title: '<img src="styles/legend/1_ZagorjeCeljeVariantaC1_33.png" /> 1_Zagorje-Celje Varianta C1'
            });
var format_1_ZalogZagorjeVariantaB_34 = new ol.format.GeoJSON();
var features_1_ZalogZagorjeVariantaB_34 = format_1_ZalogZagorjeVariantaB_34.readFeatures(json_1_ZalogZagorjeVariantaB_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_ZalogZagorjeVariantaB_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_ZalogZagorjeVariantaB_34.addFeatures(features_1_ZalogZagorjeVariantaB_34);
var lyr_1_ZalogZagorjeVariantaB_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_ZalogZagorjeVariantaB_34, 
                style: style_1_ZalogZagorjeVariantaB_34,
                interactive: true,
                title: '<img src="styles/legend/1_ZalogZagorjeVariantaB_34.png" /> 1_Zalog-Zagorje Varianta B'
            });
var format_1_CeljepostajaVariantaF_35 = new ol.format.GeoJSON();
var features_1_CeljepostajaVariantaF_35 = format_1_CeljepostajaVariantaF_35.readFeatures(json_1_CeljepostajaVariantaF_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_CeljepostajaVariantaF_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_CeljepostajaVariantaF_35.addFeatures(features_1_CeljepostajaVariantaF_35);
var lyr_1_CeljepostajaVariantaF_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_CeljepostajaVariantaF_35, 
                style: style_1_CeljepostajaVariantaF_35,
                interactive: true,
                title: '<img src="styles/legend/1_CeljepostajaVariantaF_35.png" /> 1_Celje postaja Varianta F'
            });
var format_1_LevecCeljeVariantaF_36 = new ol.format.GeoJSON();
var features_1_LevecCeljeVariantaF_36 = format_1_LevecCeljeVariantaF_36.readFeatures(json_1_LevecCeljeVariantaF_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_LevecCeljeVariantaF_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_LevecCeljeVariantaF_36.addFeatures(features_1_LevecCeljeVariantaF_36);
var lyr_1_LevecCeljeVariantaF_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_LevecCeljeVariantaF_36, 
                style: style_1_LevecCeljeVariantaF_36,
                interactive: true,
                title: '<img src="styles/legend/1_LevecCeljeVariantaF_36.png" /> 1_Levec-Celje Varianta F'
            });
var format_1_LjubljanaCeljeVariantaA2_37 = new ol.format.GeoJSON();
var features_1_LjubljanaCeljeVariantaA2_37 = format_1_LjubljanaCeljeVariantaA2_37.readFeatures(json_1_LjubljanaCeljeVariantaA2_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_LjubljanaCeljeVariantaA2_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_LjubljanaCeljeVariantaA2_37.addFeatures(features_1_LjubljanaCeljeVariantaA2_37);
var lyr_1_LjubljanaCeljeVariantaA2_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_LjubljanaCeljeVariantaA2_37, 
                style: style_1_LjubljanaCeljeVariantaA2_37,
                interactive: true,
                title: '<img src="styles/legend/1_LjubljanaCeljeVariantaA2_37.png" /> 1_Ljubljana-Celje Varianta A2'
            });
var format_1_LjubljanaCeljeVariantaA1_38 = new ol.format.GeoJSON();
var features_1_LjubljanaCeljeVariantaA1_38 = format_1_LjubljanaCeljeVariantaA1_38.readFeatures(json_1_LjubljanaCeljeVariantaA1_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_LjubljanaCeljeVariantaA1_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_LjubljanaCeljeVariantaA1_38.addFeatures(features_1_LjubljanaCeljeVariantaA1_38);
var lyr_1_LjubljanaCeljeVariantaA1_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_LjubljanaCeljeVariantaA1_38, 
                style: style_1_LjubljanaCeljeVariantaA1_38,
                interactive: true,
                title: '<img src="styles/legend/1_LjubljanaCeljeVariantaA1_38.png" /> 1_Ljubljana-Celje Varianta A1'
            });
var format_R2_DomaleKranjZlatoPolje_39 = new ol.format.GeoJSON();
var features_R2_DomaleKranjZlatoPolje_39 = format_R2_DomaleKranjZlatoPolje_39.readFeatures(json_R2_DomaleKranjZlatoPolje_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R2_DomaleKranjZlatoPolje_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R2_DomaleKranjZlatoPolje_39.addFeatures(features_R2_DomaleKranjZlatoPolje_39);
var lyr_R2_DomaleKranjZlatoPolje_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R2_DomaleKranjZlatoPolje_39, 
                style: style_R2_DomaleKranjZlatoPolje_39,
                interactive: true,
                title: '<img src="styles/legend/R2_DomaleKranjZlatoPolje_39.png" /> R2_Domžale-Kranj Zlato Polje'
            });
var format_R2_MosteDomale_40 = new ol.format.GeoJSON();
var features_R2_MosteDomale_40 = format_R2_MosteDomale_40.readFeatures(json_R2_MosteDomale_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R2_MosteDomale_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R2_MosteDomale_40.addFeatures(features_R2_MosteDomale_40);
var lyr_R2_MosteDomale_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R2_MosteDomale_40, 
                style: style_R2_MosteDomale_40,
                interactive: true,
                title: '<img src="styles/legend/R2_MosteDomale_40.png" /> R2_Moste-Domžale'
            });
var format_R2_Zahodnaobvoznaproga_41 = new ol.format.GeoJSON();
var features_R2_Zahodnaobvoznaproga_41 = format_R2_Zahodnaobvoznaproga_41.readFeatures(json_R2_Zahodnaobvoznaproga_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R2_Zahodnaobvoznaproga_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R2_Zahodnaobvoznaproga_41.addFeatures(features_R2_Zahodnaobvoznaproga_41);
var lyr_R2_Zahodnaobvoznaproga_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R2_Zahodnaobvoznaproga_41, 
                style: style_R2_Zahodnaobvoznaproga_41,
                interactive: true,
                title: '<img src="styles/legend/R2_Zahodnaobvoznaproga_41.png" /> R2_Zahodna obvozna proga'
            });
var format_Obstojeeproge_42 = new ol.format.GeoJSON();
var features_Obstojeeproge_42 = format_Obstojeeproge_42.readFeatures(json_Obstojeeproge_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstojeeproge_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstojeeproge_42.addFeatures(features_Obstojeeproge_42);
var lyr_Obstojeeproge_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obstojeeproge_42, 
                style: style_Obstojeeproge_42,
                interactive: true,
                title: '<img src="styles/legend/Obstojeeproge_42.png" /> Obstoječe proge'
            });
var format_Obstojeepostaje_43 = new ol.format.GeoJSON();
var features_Obstojeepostaje_43 = format_Obstojeepostaje_43.readFeatures(json_Obstojeepostaje_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstojeepostaje_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstojeepostaje_43.addFeatures(features_Obstojeepostaje_43);
var lyr_Obstojeepostaje_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obstojeepostaje_43, 
                style: style_Obstojeepostaje_43,
                interactive: true,
                title: '<img src="styles/legend/Obstojeepostaje_43.png" /> Obstoječe postaje'
            });
var format_11_MariborZagreb_44 = new ol.format.GeoJSON();
var features_11_MariborZagreb_44 = format_11_MariborZagreb_44.readFeatures(json_11_MariborZagreb_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11_MariborZagreb_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11_MariborZagreb_44.addFeatures(features_11_MariborZagreb_44);
var lyr_11_MariborZagreb_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_11_MariborZagreb_44, 
                style: style_11_MariborZagreb_44,
                interactive: true,
                title: '<img src="styles/legend/11_MariborZagreb_44.png" /> 11_Maribor-Zagreb'
            });
var format_7_BeltniciLendava_45 = new ol.format.GeoJSON();
var features_7_BeltniciLendava_45 = format_7_BeltniciLendava_45.readFeatures(json_7_BeltniciLendava_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7_BeltniciLendava_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7_BeltniciLendava_45.addFeatures(features_7_BeltniciLendava_45);
var lyr_7_BeltniciLendava_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_7_BeltniciLendava_45, 
                style: style_7_BeltniciLendava_45,
                interactive: true,
                title: '<img src="styles/legend/7_BeltniciLendava_45.png" /> 7_Beltnici-Lendava'
            });
var format_6_NovomestoDobova_46 = new ol.format.GeoJSON();
var features_6_NovomestoDobova_46 = format_6_NovomestoDobova_46.readFeatures(json_6_NovomestoDobova_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6_NovomestoDobova_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6_NovomestoDobova_46.addFeatures(features_6_NovomestoDobova_46);
var lyr_6_NovomestoDobova_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6_NovomestoDobova_46, 
                style: style_6_NovomestoDobova_46,
                interactive: true,
                title: '<img src="styles/legend/6_NovomestoDobova_46.png" /> 6_Novo mesto-Dobova'
            });
var format_5_VelenjeDravograd_47 = new ol.format.GeoJSON();
var features_5_VelenjeDravograd_47 = format_5_VelenjeDravograd_47.readFeatures(json_5_VelenjeDravograd_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5_VelenjeDravograd_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5_VelenjeDravograd_47.addFeatures(features_5_VelenjeDravograd_47);
var lyr_5_VelenjeDravograd_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5_VelenjeDravograd_47, 
                style: style_5_VelenjeDravograd_47,
                interactive: true,
                title: '<img src="styles/legend/5_VelenjeDravograd_47.png" /> 5_Velenje–Dravograd'
            });
var group_Obstojeeomreje = new ol.layer.Group({
                                layers: [lyr_Obstojeeproge_42,lyr_Obstojeepostaje_43,],
                                title: "Obstoječe omrežje"});
var group_R2 = new ol.layer.Group({
                                layers: [lyr_R2_DomaleKranjZlatoPolje_39,lyr_R2_MosteDomale_40,lyr_R2_Zahodnaobvoznaproga_41,],
                                title: "R2"});
var group_1_LjubljanaCeljeMaribor = new ol.layer.Group({
                                layers: [lyr_1_empeterPragerskovariantaE_30,lyr_1_GrobelnoPragerskoVariantaD_31,lyr_1_ZagorjeempeterVariantaC2_32,lyr_1_ZagorjeCeljeVariantaC1_33,lyr_1_ZalogZagorjeVariantaB_34,lyr_1_CeljepostajaVariantaF_35,lyr_1_LevecCeljeVariantaF_36,lyr_1_LjubljanaCeljeVariantaA2_37,lyr_1_LjubljanaCeljeVariantaA1_38,],
                                title: "1_Ljubljana-Celje-Maribor "});
var group_2_LjubljanaDivaaKoperTrst = new ol.layer.Group({
                                layers: [lyr_2_Divaa_TriVariantaD_25,lyr_2_DivaaTrstVariantaC_26,lyr_2_DivaaKoper_27,lyr_2_LjubljanaDivaavariantaB_28,lyr_2_LjubljanaDivaavariantaA_29,],
                                title: "2_Ljubljana-Divača-Koper-Trst"});
var group_3_LjubljanaAjdovinaGorica = new ol.layer.Group({
                                layers: [lyr_3_LjubljanaAjdovinaGoricaVariantaB_23,lyr_3_LjubljanaAjdovinaGoricaVariantaA_24,],
                                title: "3_Ljubljana-Ajdovščina-Gorica"});
var group_4_BrnikCelovec = new ol.layer.Group({
                                layers: [lyr_4_BrnikCelovecVariantaB_21,lyr_4_BrnikCelovecVariantaA_22,],
                                title: "4_Brnik-Celovec"});
var group_8_LV = new ol.layer.Group({
                                layers: [lyr_8_LVVariantaDPredorZalogBrezovica_17,lyr_8_LVVariantaCOptimiziranipredoriLV4_18,lyr_8_LVVariantaBVzhodnojunaobvoznica_19,lyr_8_LVVariantaASevernozahodnaobvoznica_20,],
                                title: "8_LŽV"});
var group_9_LesceBledjezero = new ol.layer.Group({
                                layers: [lyr_9_LesceBledJezeroVariantaB2_14,lyr_9_LesceBledJezeroVariantaB1_15,lyr_9_LesceBledJezeroVariantaA_16,],
                                title: "9_Lesce-Bled jezero"});
var group_10_TrstKoperPiran = new ol.layer.Group({
                                layers: [lyr_10_TrstKoperPiranVariantaB2_11,lyr_10_TrstKoperPiranVariantaB1_12,lyr_10_TrstKoperPiranVariantaA_13,],
                                title: "10_Trst-Koper-Piran"});
var group_12_MariborMurskaSobota = new ol.layer.Group({
                                layers: [lyr_12_MariborMurskaSobotaVariantaB_9,lyr_12_MariborMurskaSobotaVariantaA_10,],
                                title: "12_Maribor-Murska Sobota"});
var group_Okoljeinprostor = new ol.layer.Group({
                                layers: [lyr_03_Kulturna_dediscina_5,lyr_04_Natura_2000_D96_6,lyr_14_VVO_dravni_nivo_7,lyr_15_VVO_obcinski_nivo_8,],
                                title: "Okolje in prostor"});
var group_Podloge = new ol.layer.Group({
                                layers: [lyr_BingAerial_0,lyr_OpenStreetMap_1,lyr_Esritopo_2,lyr_Esrisatelit_3,lyr_BarvniRGBortofotozdolinotalnegaintervalaDTI050mvD96ETRSkoordinatnemsistemu_4,],
                                title: "Podloge"});

lyr_BingAerial_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Esritopo_2.setVisible(true);lyr_Esrisatelit_3.setVisible(true);lyr_BarvniRGBortofotozdolinotalnegaintervalaDTI050mvD96ETRSkoordinatnemsistemu_4.setVisible(true);lyr_03_Kulturna_dediscina_5.setVisible(true);lyr_04_Natura_2000_D96_6.setVisible(true);lyr_14_VVO_dravni_nivo_7.setVisible(true);lyr_15_VVO_obcinski_nivo_8.setVisible(true);lyr_12_MariborMurskaSobotaVariantaB_9.setVisible(true);lyr_12_MariborMurskaSobotaVariantaA_10.setVisible(true);lyr_10_TrstKoperPiranVariantaB2_11.setVisible(true);lyr_10_TrstKoperPiranVariantaB1_12.setVisible(true);lyr_10_TrstKoperPiranVariantaA_13.setVisible(true);lyr_9_LesceBledJezeroVariantaB2_14.setVisible(true);lyr_9_LesceBledJezeroVariantaB1_15.setVisible(true);lyr_9_LesceBledJezeroVariantaA_16.setVisible(true);lyr_8_LVVariantaDPredorZalogBrezovica_17.setVisible(true);lyr_8_LVVariantaCOptimiziranipredoriLV4_18.setVisible(true);lyr_8_LVVariantaBVzhodnojunaobvoznica_19.setVisible(true);lyr_8_LVVariantaASevernozahodnaobvoznica_20.setVisible(true);lyr_4_BrnikCelovecVariantaB_21.setVisible(true);lyr_4_BrnikCelovecVariantaA_22.setVisible(true);lyr_3_LjubljanaAjdovinaGoricaVariantaB_23.setVisible(true);lyr_3_LjubljanaAjdovinaGoricaVariantaA_24.setVisible(true);lyr_2_Divaa_TriVariantaD_25.setVisible(true);lyr_2_DivaaTrstVariantaC_26.setVisible(true);lyr_2_DivaaKoper_27.setVisible(true);lyr_2_LjubljanaDivaavariantaB_28.setVisible(true);lyr_2_LjubljanaDivaavariantaA_29.setVisible(true);lyr_1_empeterPragerskovariantaE_30.setVisible(true);lyr_1_GrobelnoPragerskoVariantaD_31.setVisible(true);lyr_1_ZagorjeempeterVariantaC2_32.setVisible(true);lyr_1_ZagorjeCeljeVariantaC1_33.setVisible(true);lyr_1_ZalogZagorjeVariantaB_34.setVisible(true);lyr_1_CeljepostajaVariantaF_35.setVisible(true);lyr_1_LevecCeljeVariantaF_36.setVisible(true);lyr_1_LjubljanaCeljeVariantaA2_37.setVisible(true);lyr_1_LjubljanaCeljeVariantaA1_38.setVisible(true);lyr_R2_DomaleKranjZlatoPolje_39.setVisible(true);lyr_R2_MosteDomale_40.setVisible(true);lyr_R2_Zahodnaobvoznaproga_41.setVisible(true);lyr_Obstojeeproge_42.setVisible(true);lyr_Obstojeepostaje_43.setVisible(true);lyr_11_MariborZagreb_44.setVisible(true);lyr_7_BeltniciLendava_45.setVisible(true);lyr_6_NovomestoDobova_46.setVisible(true);lyr_5_VelenjeDravograd_47.setVisible(true);
var layersList = [group_Podloge,group_Okoljeinprostor,group_12_MariborMurskaSobota,group_10_TrstKoperPiran,group_9_LesceBledjezero,group_8_LV,group_4_BrnikCelovec,group_3_LjubljanaAjdovinaGorica,group_2_LjubljanaDivaaKoperTrst,group_1_LjubljanaCeljeMaribor,group_R2,group_Obstojeeomreje,lyr_11_MariborZagreb_44,lyr_7_BeltniciLendava_45,lyr_6_NovomestoDobova_46,lyr_5_VelenjeDravograd_47];
lyr_03_Kulturna_dediscina_5.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_04_Natura_2000_D96_6.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', });
lyr_14_VVO_dravni_nivo_7.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_15_VVO_obcinski_nivo_8.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_12_MariborMurskaSobotaVariantaB_9.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_12_MariborMurskaSobotaVariantaA_10.set('fieldAliases', {'qc_id': 'qc_id', 'tip odseka': 'tip odseka', 'length': 'length', });
lyr_10_TrstKoperPiranVariantaB2_11.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_10_TrstKoperPiranVariantaB1_12.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_10_TrstKoperPiranVariantaA_13.set('fieldAliases', {'qc_id': 'qc_id', 'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_9_LesceBledJezeroVariantaB2_14.set('fieldAliases', {'qc_id': 'qc_id', 'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_9_LesceBledJezeroVariantaB1_15.set('fieldAliases', {'qc_id': 'qc_id', 'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_9_LesceBledJezeroVariantaA_16.set('fieldAliases', {'qc_id': 'qc_id', 'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_8_LVVariantaDPredorZalogBrezovica_17.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_8_LVVariantaCOptimiziranipredoriLV4_18.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_8_LVVariantaBVzhodnojunaobvoznica_19.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_8_LVVariantaASevernozahodnaobvoznica_20.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_4_BrnikCelovecVariantaB_21.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_4_BrnikCelovecVariantaA_22.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_3_LjubljanaAjdovinaGoricaVariantaB_23.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_3_LjubljanaAjdovinaGoricaVariantaA_24.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_2_Divaa_TriVariantaD_25.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_2_DivaaTrstVariantaC_26.set('fieldAliases', {'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_2_DivaaKoper_27.set('fieldAliases', {'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_2_LjubljanaDivaavariantaB_28.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_2_LjubljanaDivaavariantaA_29.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_empeterPragerskovariantaE_30.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_GrobelnoPragerskoVariantaD_31.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_ZagorjeempeterVariantaC2_32.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_ZagorjeCeljeVariantaC1_33.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_ZalogZagorjeVariantaB_34.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_CeljepostajaVariantaF_35.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_LevecCeljeVariantaF_36.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_LjubljanaCeljeVariantaA2_37.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_LjubljanaCeljeVariantaA1_38.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_R2_DomaleKranjZlatoPolje_39.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_R2_MosteDomale_40.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'r_no': 'r_no', });
lyr_R2_Zahodnaobvoznaproga_41.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_Obstojeeproge_42.set('fieldAliases', {'qc_id': 'qc_id', 'sž_ime_p~': 'sž_ime_p~', 'sž_kateg~': 'sž_kateg~', 'sž_števi': 'sž_števi', });
lyr_Obstojeepostaje_43.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'name': 'name', });
lyr_11_MariborZagreb_44.set('fieldAliases', {'qc_id': 'qc_id', 'descriptio': 'descriptio', 'length': 'length', });
lyr_7_BeltniciLendava_45.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_6_NovomestoDobova_46.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_5_VelenjeDravograd_47.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_03_Kulturna_dediscina_5.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_04_Natura_2000_D96_6.set('fieldImages', {'qc_id': 'TextEdit', 'objectid': 'TextEdit', });
lyr_14_VVO_dravni_nivo_7.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_15_VVO_obcinski_nivo_8.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_12_MariborMurskaSobotaVariantaB_9.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_12_MariborMurskaSobotaVariantaA_10.set('fieldImages', {'qc_id': '', 'tip odseka': '', 'length': '', });
lyr_10_TrstKoperPiranVariantaB2_11.set('fieldImages', {'qc_id': 'TextEdit', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_10_TrstKoperPiranVariantaB1_12.set('fieldImages', {'qc_id': 'TextEdit', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_10_TrstKoperPiranVariantaA_13.set('fieldImages', {'qc_id': 'TextEdit', 'Tipodseka': '', 'Length': '', });
lyr_9_LesceBledJezeroVariantaB2_14.set('fieldImages', {'qc_id': 'TextEdit', 'Tipodseka': '', 'Length': '', });
lyr_9_LesceBledJezeroVariantaB1_15.set('fieldImages', {'qc_id': 'TextEdit', 'Tipodseka': '', 'Length': '', });
lyr_9_LesceBledJezeroVariantaA_16.set('fieldImages', {'qc_id': 'TextEdit', 'Tipodseka': '', 'Length': 'TextEdit', });
lyr_8_LVVariantaDPredorZalogBrezovica_17.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_8_LVVariantaCOptimiziranipredoriLV4_18.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_8_LVVariantaBVzhodnojunaobvoznica_19.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'Range', });
lyr_8_LVVariantaASevernozahodnaobvoznica_20.set('fieldImages', {'tipodseka': '', 'length': 'TextEdit', });
lyr_4_BrnikCelovecVariantaB_21.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_4_BrnikCelovecVariantaA_22.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_3_LjubljanaAjdovinaGoricaVariantaB_23.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_3_LjubljanaAjdovinaGoricaVariantaA_24.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_2_Divaa_TriVariantaD_25.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_2_DivaaTrstVariantaC_26.set('fieldImages', {'Tipodseka': '', 'Length': '', });
lyr_2_DivaaKoper_27.set('fieldImages', {'Tipodseka': '', 'Length': '', });
lyr_2_LjubljanaDivaavariantaB_28.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_2_LjubljanaDivaavariantaA_29.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_1_empeterPragerskovariantaE_30.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'Range', });
lyr_1_GrobelnoPragerskoVariantaD_31.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_1_ZagorjeempeterVariantaC2_32.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_1_ZagorjeCeljeVariantaC1_33.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_1_ZalogZagorjeVariantaB_34.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_1_CeljepostajaVariantaF_35.set('fieldImages', {'qc_id_0': '', 'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_1_LevecCeljeVariantaF_36.set('fieldImages', {'tipodseka': '', 'length': '', });
lyr_1_LjubljanaCeljeVariantaA2_37.set('fieldImages', {'tipodseka': '', 'length': 'TextEdit', });
lyr_1_LjubljanaCeljeVariantaA1_38.set('fieldImages', {'tipodseka': '', 'length': '', });
lyr_R2_DomaleKranjZlatoPolje_39.set('fieldImages', {'qc_id': '', });
lyr_R2_MosteDomale_40.set('fieldImages', {'qc_id': '', 'no': '', 'r_no': '', });
lyr_R2_Zahodnaobvoznaproga_41.set('fieldImages', {'qc_id': '', });
lyr_Obstojeeproge_42.set('fieldImages', {'qc_id': 'TextEdit', 'sž_ime_p~': 'TextEdit', 'sž_kateg~': 'TextEdit', 'sž_števi': 'TextEdit', });
lyr_Obstojeepostaje_43.set('fieldImages', {'qc_id': '', 'no': '', 'name': '', });
lyr_11_MariborZagreb_44.set('fieldImages', {'qc_id': '', 'descriptio': 'TextEdit', 'length': '', });
lyr_7_BeltniciLendava_45.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_6_NovomestoDobova_46.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_5_VelenjeDravograd_47.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_03_Kulturna_dediscina_5.set('fieldLabels', {});
lyr_04_Natura_2000_D96_6.set('fieldLabels', {});
lyr_14_VVO_dravni_nivo_7.set('fieldLabels', {});
lyr_15_VVO_obcinski_nivo_8.set('fieldLabels', {});
lyr_12_MariborMurskaSobotaVariantaB_9.set('fieldLabels', {});
lyr_12_MariborMurskaSobotaVariantaA_10.set('fieldLabels', {});
lyr_10_TrstKoperPiranVariantaB2_11.set('fieldLabels', {});
lyr_10_TrstKoperPiranVariantaB1_12.set('fieldLabels', {});
lyr_10_TrstKoperPiranVariantaA_13.set('fieldLabels', {});
lyr_9_LesceBledJezeroVariantaB2_14.set('fieldLabels', {});
lyr_9_LesceBledJezeroVariantaB1_15.set('fieldLabels', {});
lyr_9_LesceBledJezeroVariantaA_16.set('fieldLabels', {});
lyr_8_LVVariantaDPredorZalogBrezovica_17.set('fieldLabels', {});
lyr_8_LVVariantaCOptimiziranipredoriLV4_18.set('fieldLabels', {});
lyr_8_LVVariantaBVzhodnojunaobvoznica_19.set('fieldLabels', {});
lyr_8_LVVariantaASevernozahodnaobvoznica_20.set('fieldLabels', {});
lyr_4_BrnikCelovecVariantaB_21.set('fieldLabels', {});
lyr_4_BrnikCelovecVariantaA_22.set('fieldLabels', {});
lyr_3_LjubljanaAjdovinaGoricaVariantaB_23.set('fieldLabels', {});
lyr_3_LjubljanaAjdovinaGoricaVariantaA_24.set('fieldLabels', {});
lyr_2_Divaa_TriVariantaD_25.set('fieldLabels', {});
lyr_2_DivaaTrstVariantaC_26.set('fieldLabels', {});
lyr_2_DivaaKoper_27.set('fieldLabels', {});
lyr_2_LjubljanaDivaavariantaB_28.set('fieldLabels', {});
lyr_2_LjubljanaDivaavariantaA_29.set('fieldLabels', {});
lyr_1_empeterPragerskovariantaE_30.set('fieldLabels', {});
lyr_1_GrobelnoPragerskoVariantaD_31.set('fieldLabels', {});
lyr_1_ZagorjeempeterVariantaC2_32.set('fieldLabels', {});
lyr_1_ZagorjeCeljeVariantaC1_33.set('fieldLabels', {});
lyr_1_ZalogZagorjeVariantaB_34.set('fieldLabels', {});
lyr_1_CeljepostajaVariantaF_35.set('fieldLabels', {});
lyr_1_LevecCeljeVariantaF_36.set('fieldLabels', {});
lyr_1_LjubljanaCeljeVariantaA2_37.set('fieldLabels', {});
lyr_1_LjubljanaCeljeVariantaA1_38.set('fieldLabels', {});
lyr_R2_DomaleKranjZlatoPolje_39.set('fieldLabels', {});
lyr_R2_MosteDomale_40.set('fieldLabels', {});
lyr_R2_Zahodnaobvoznaproga_41.set('fieldLabels', {});
lyr_Obstojeeproge_42.set('fieldLabels', {});
lyr_Obstojeepostaje_43.set('fieldLabels', {});
lyr_11_MariborZagreb_44.set('fieldLabels', {'qc_id': 'no label', 'descriptio': 'no label', 'length': 'no label', });
lyr_7_BeltniciLendava_45.set('fieldLabels', {'qc_id': 'no label', 'tipodseka': 'no label', 'length': 'no label', });
lyr_6_NovomestoDobova_46.set('fieldLabels', {'qc_id': 'no label', 'tipodseka': 'no label', 'length': 'no label', });
lyr_5_VelenjeDravograd_47.set('fieldLabels', {'qc_id': 'no label', 'tipodseka': 'no label', 'length': 'no label', });
lyr_5_VelenjeDravograd_47.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});