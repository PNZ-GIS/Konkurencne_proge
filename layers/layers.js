var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.803000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Esritopo_1 = new ol.layer.Tile({
            'title': 'Esri topo',
            'type': 'base',
            'opacity': 0.509000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Esrisatelit_2 = new ol.layer.Tile({
            'title': 'Esri satelit',
            'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Carto_light_nolabels_3 = new ol.layer.Tile({
            'title': 'Carto_light_nolabels',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_Drave_4 = new ol.format.GeoJSON();
var features_Drave_4 = format_Drave_4.readFeatures(json_Drave_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drave_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drave_4.addFeatures(features_Drave_4);
var lyr_Drave_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Drave_4, 
                style: style_Drave_4,
                interactive: false,
                title: '<img src="styles/legend/Drave_4.png" /> Države'
            });
var lyr_IT_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "IT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IT_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [611039.430757, 4236957.334643, 2119046.033771, 6020672.617064]
                            })
                        });
var lyr_AT_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "AT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AT_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1053465.072614, 5825030.176486, 1915869.769652, 6297069.407299]
                            })
                        });
var lyr_HU_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "HU",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HU_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1768068.497916, 5693212.506719, 2633995.267813, 6232933.986586]
                            })
                        });
var lyr_HR_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "HR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HR_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1569296.836371, 5562971.318802, 2165900.170118, 5880145.131947]
                            })
                        });
var format_Slovenija_9 = new ol.format.GeoJSON();
var features_Slovenija_9 = format_Slovenija_9.readFeatures(json_Slovenija_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Slovenija_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Slovenija_9.addFeatures(features_Slovenija_9);
var lyr_Slovenija_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Slovenija_9, 
                style: style_Slovenija_9,
                interactive: false,
                title: '<img src="styles/legend/Slovenija_9.png" /> Slovenija'
            });
var format_Kulturna_dediscina_10 = new ol.format.GeoJSON();
var features_Kulturna_dediscina_10 = format_Kulturna_dediscina_10.readFeatures(json_Kulturna_dediscina_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kulturna_dediscina_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kulturna_dediscina_10.addFeatures(features_Kulturna_dediscina_10);
var lyr_Kulturna_dediscina_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kulturna_dediscina_10, 
                style: style_Kulturna_dediscina_10,
                interactive: false,
                title: '<img src="styles/legend/Kulturna_dediscina_10.png" /> Kulturna_dediscina'
            });
var format_Natura_2000_11 = new ol.format.GeoJSON();
var features_Natura_2000_11 = format_Natura_2000_11.readFeatures(json_Natura_2000_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Natura_2000_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Natura_2000_11.addFeatures(features_Natura_2000_11);
var lyr_Natura_2000_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Natura_2000_11, 
                style: style_Natura_2000_11,
                interactive: false,
                title: '<img src="styles/legend/Natura_2000_11.png" /> Natura_2000'
            });
var format_VVO_dravni_nivo_12 = new ol.format.GeoJSON();
var features_VVO_dravni_nivo_12 = format_VVO_dravni_nivo_12.readFeatures(json_VVO_dravni_nivo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VVO_dravni_nivo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VVO_dravni_nivo_12.addFeatures(features_VVO_dravni_nivo_12);
var lyr_VVO_dravni_nivo_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VVO_dravni_nivo_12, 
                style: style_VVO_dravni_nivo_12,
                interactive: false,
                title: '<img src="styles/legend/VVO_dravni_nivo_12.png" /> VVO_državni_nivo'
            });
var format_VVO_obcinski_nivo_13 = new ol.format.GeoJSON();
var features_VVO_obcinski_nivo_13 = format_VVO_obcinski_nivo_13.readFeatures(json_VVO_obcinski_nivo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VVO_obcinski_nivo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VVO_obcinski_nivo_13.addFeatures(features_VVO_obcinski_nivo_13);
var lyr_VVO_obcinski_nivo_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VVO_obcinski_nivo_13, 
                style: style_VVO_obcinski_nivo_13,
                interactive: false,
                title: '<img src="styles/legend/VVO_obcinski_nivo_13.png" /> VVO_obcinski_nivo'
            });
var format_CesteACinHC_14 = new ol.format.GeoJSON();
var features_CesteACinHC_14 = format_CesteACinHC_14.readFeatures(json_CesteACinHC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CesteACinHC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CesteACinHC_14.addFeatures(features_CesteACinHC_14);
var lyr_CesteACinHC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CesteACinHC_14, 
                style: style_CesteACinHC_14,
                interactive: false,
                title: '<img src="styles/legend/CesteACinHC_14.png" /> Ceste (AC in HC)'
            });
var format_Obstojeeproge_15 = new ol.format.GeoJSON();
var features_Obstojeeproge_15 = format_Obstojeeproge_15.readFeatures(json_Obstojeeproge_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstojeeproge_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstojeeproge_15.addFeatures(features_Obstojeeproge_15);
var lyr_Obstojeeproge_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obstojeeproge_15, 
                style: style_Obstojeeproge_15,
                interactive: false,
                title: '<img src="styles/legend/Obstojeeproge_15.png" /> Obstoječe proge'
            });
var format_Obstojeepostaje_16 = new ol.format.GeoJSON();
var features_Obstojeepostaje_16 = format_Obstojeepostaje_16.readFeatures(json_Obstojeepostaje_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstojeepostaje_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstojeepostaje_16.addFeatures(features_Obstojeepostaje_16);
var lyr_Obstojeepostaje_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obstojeepostaje_16, 
                style: style_Obstojeepostaje_16,
                interactive: false,
                title: '<img src="styles/legend/Obstojeepostaje_16.png" /> Obstoječe postaje'
            });
var format_DivaaKoper2tir_17 = new ol.format.GeoJSON();
var features_DivaaKoper2tir_17 = format_DivaaKoper2tir_17.readFeatures(json_DivaaKoper2tir_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivaaKoper2tir_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivaaKoper2tir_17.addFeatures(features_DivaaKoper2tir_17);
var lyr_DivaaKoper2tir_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivaaKoper2tir_17, 
                style: style_DivaaKoper2tir_17,
                interactive: false,
                title: '<img src="styles/legend/DivaaKoper2tir_17.png" /> Divača-Koper (2. tir)'
            });
var format_Dvotirnost_KRJES_18 = new ol.format.GeoJSON();
var features_Dvotirnost_KRJES_18 = format_Dvotirnost_KRJES_18.readFeatures(json_Dvotirnost_KRJES_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dvotirnost_KRJES_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dvotirnost_KRJES_18.addFeatures(features_Dvotirnost_KRJES_18);
var lyr_Dvotirnost_KRJES_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dvotirnost_KRJES_18, 
                style: style_Dvotirnost_KRJES_18,
                interactive: false,
                title: '<img src="styles/legend/Dvotirnost_KRJES_18.png" /> Dvotirnost_KR-JES'
            });
var format_Dvotirnost_LJKR_19 = new ol.format.GeoJSON();
var features_Dvotirnost_LJKR_19 = format_Dvotirnost_LJKR_19.readFeatures(json_Dvotirnost_LJKR_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dvotirnost_LJKR_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dvotirnost_LJKR_19.addFeatures(features_Dvotirnost_LJKR_19);
var lyr_Dvotirnost_LJKR_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dvotirnost_LJKR_19, 
                style: style_Dvotirnost_LJKR_19,
                interactive: false,
                title: '<img src="styles/legend/Dvotirnost_LJKR_19.png" /> Dvotirnost_LJ-KR'
            });
var format_Dvotirnost_MBentilj_20 = new ol.format.GeoJSON();
var features_Dvotirnost_MBentilj_20 = format_Dvotirnost_MBentilj_20.readFeatures(json_Dvotirnost_MBentilj_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dvotirnost_MBentilj_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dvotirnost_MBentilj_20.addFeatures(features_Dvotirnost_MBentilj_20);
var lyr_Dvotirnost_MBentilj_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dvotirnost_MBentilj_20, 
                style: style_Dvotirnost_MBentilj_20,
                interactive: false,
                title: '<img src="styles/legend/Dvotirnost_MBentilj_20.png" /> Dvotirnost_MB-Šentilj'
            });
var format_Nadgradnja_MBRU_21 = new ol.format.GeoJSON();
var features_Nadgradnja_MBRU_21 = format_Nadgradnja_MBRU_21.readFeatures(json_Nadgradnja_MBRU_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nadgradnja_MBRU_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nadgradnja_MBRU_21.addFeatures(features_Nadgradnja_MBRU_21);
var lyr_Nadgradnja_MBRU_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nadgradnja_MBRU_21, 
                style: style_Nadgradnja_MBRU_21,
                interactive: false,
                title: '<img src="styles/legend/Nadgradnja_MBRU_21.png" /> Nadgradnja_MB-RU'
            });
var format_Nadgradnja_CEVE_22 = new ol.format.GeoJSON();
var features_Nadgradnja_CEVE_22 = format_Nadgradnja_CEVE_22.readFeatures(json_Nadgradnja_CEVE_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nadgradnja_CEVE_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nadgradnja_CEVE_22.addFeatures(features_Nadgradnja_CEVE_22);
var lyr_Nadgradnja_CEVE_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nadgradnja_CEVE_22, 
                style: style_Nadgradnja_CEVE_22,
                interactive: false,
                title: '<img src="styles/legend/Nadgradnja_CEVE_22.png" /> Nadgradnja_CE-VE'
            });
var format_Nadgradnja_ZMDOB_23 = new ol.format.GeoJSON();
var features_Nadgradnja_ZMDOB_23 = format_Nadgradnja_ZMDOB_23.readFeatures(json_Nadgradnja_ZMDOB_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nadgradnja_ZMDOB_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nadgradnja_ZMDOB_23.addFeatures(features_Nadgradnja_ZMDOB_23);
var lyr_Nadgradnja_ZMDOB_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nadgradnja_ZMDOB_23, 
                style: style_Nadgradnja_ZMDOB_23,
                interactive: false,
                title: '<img src="styles/legend/Nadgradnja_ZMDOB_23.png" /> Nadgradnja_ZM-DOB'
            });
var format_Nadgradnja_DISE_24 = new ol.format.GeoJSON();
var features_Nadgradnja_DISE_24 = format_Nadgradnja_DISE_24.readFeatures(json_Nadgradnja_DISE_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nadgradnja_DISE_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nadgradnja_DISE_24.addFeatures(features_Nadgradnja_DISE_24);
var lyr_Nadgradnja_DISE_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nadgradnja_DISE_24, 
                style: style_Nadgradnja_DISE_24,
                interactive: false,
                title: '<img src="styles/legend/Nadgradnja_DISE_24.png" /> Nadgradnja_DI-SEŽ'
            });
var format_Nadgradnja_LJDI_25 = new ol.format.GeoJSON();
var features_Nadgradnja_LJDI_25 = format_Nadgradnja_LJDI_25.readFeatures(json_Nadgradnja_LJDI_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nadgradnja_LJDI_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nadgradnja_LJDI_25.addFeatures(features_Nadgradnja_LJDI_25);
var lyr_Nadgradnja_LJDI_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nadgradnja_LJDI_25, 
                style: style_Nadgradnja_LJDI_25,
                interactive: false,
                title: '<img src="styles/legend/Nadgradnja_LJDI_25.png" /> Nadgradnja_LJ-DI'
            });
var format_R2_Dolenjskaproga_26 = new ol.format.GeoJSON();
var features_R2_Dolenjskaproga_26 = format_R2_Dolenjskaproga_26.readFeatures(json_R2_Dolenjskaproga_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R2_Dolenjskaproga_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R2_Dolenjskaproga_26.addFeatures(features_R2_Dolenjskaproga_26);
var lyr_R2_Dolenjskaproga_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R2_Dolenjskaproga_26, 
                style: style_R2_Dolenjskaproga_26,
                interactive: false,
                title: '<img src="styles/legend/R2_Dolenjskaproga_26.png" /> R2_Dolenjska proga'
            });
var format_R2_DomaleKranjZlatoPolje_27 = new ol.format.GeoJSON();
var features_R2_DomaleKranjZlatoPolje_27 = format_R2_DomaleKranjZlatoPolje_27.readFeatures(json_R2_DomaleKranjZlatoPolje_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R2_DomaleKranjZlatoPolje_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R2_DomaleKranjZlatoPolje_27.addFeatures(features_R2_DomaleKranjZlatoPolje_27);
var lyr_R2_DomaleKranjZlatoPolje_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R2_DomaleKranjZlatoPolje_27, 
                style: style_R2_DomaleKranjZlatoPolje_27,
                interactive: false,
                title: '<img src="styles/legend/R2_DomaleKranjZlatoPolje_27.png" /> R2_Domžale-Kranj Zlato Polje'
            });
var format_R2_MosteDomale_28 = new ol.format.GeoJSON();
var features_R2_MosteDomale_28 = format_R2_MosteDomale_28.readFeatures(json_R2_MosteDomale_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R2_MosteDomale_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R2_MosteDomale_28.addFeatures(features_R2_MosteDomale_28);
var lyr_R2_MosteDomale_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R2_MosteDomale_28, 
                style: style_R2_MosteDomale_28,
                interactive: false,
                title: '<img src="styles/legend/R2_MosteDomale_28.png" /> R2_Moste-Domžale'
            });
var format_R2_Kamnikaproga_29 = new ol.format.GeoJSON();
var features_R2_Kamnikaproga_29 = format_R2_Kamnikaproga_29.readFeatures(json_R2_Kamnikaproga_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R2_Kamnikaproga_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R2_Kamnikaproga_29.addFeatures(features_R2_Kamnikaproga_29);
var lyr_R2_Kamnikaproga_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R2_Kamnikaproga_29, 
                style: style_R2_Kamnikaproga_29,
                interactive: false,
                title: '<img src="styles/legend/R2_Kamnikaproga_29.png" /> R2_Kamniška proga'
            });
var format_S2_ORSredie_30 = new ol.format.GeoJSON();
var features_S2_ORSredie_30 = format_S2_ORSredie_30.readFeatures(json_S2_ORSredie_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S2_ORSredie_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S2_ORSredie_30.addFeatures(features_S2_ORSredie_30);
var lyr_S2_ORSredie_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S2_ORSredie_30, 
                style: style_S2_ORSredie_30,
                interactive: false,
                title: '<img src="styles/legend/S2_ORSredie_30.png" /> S2_OR-Središče'
            });
var format_S2_ORHodo_31 = new ol.format.GeoJSON();
var features_S2_ORHodo_31 = format_S2_ORHodo_31.readFeatures(json_S2_ORHodo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S2_ORHodo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S2_ORHodo_31.addFeatures(features_S2_ORHodo_31);
var lyr_S2_ORHodo_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S2_ORHodo_31, 
                style: style_S2_ORHodo_31,
                interactive: false,
                title: '<img src="styles/legend/S2_ORHodo_31.png" /> S2_OR-Hodoš'
            });
var format_S2_PIIB_32 = new ol.format.GeoJSON();
var features_S2_PIIB_32 = format_S2_PIIB_32.readFeatures(json_S2_PIIB_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S2_PIIB_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S2_PIIB_32.addFeatures(features_S2_PIIB_32);
var lyr_S2_PIIB_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S2_PIIB_32, 
                style: style_S2_PIIB_32,
                interactive: false,
                title: '<img src="styles/legend/S2_PIIB_32.png" /> S2_PI-IB'
            });
var format_S2_ZMMB_33 = new ol.format.GeoJSON();
var features_S2_ZMMB_33 = format_S2_ZMMB_33.readFeatures(json_S2_ZMMB_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S2_ZMMB_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S2_ZMMB_33.addFeatures(features_S2_ZMMB_33);
var lyr_S2_ZMMB_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S2_ZMMB_33, 
                style: style_S2_ZMMB_33,
                interactive: false,
                title: '<img src="styles/legend/S2_ZMMB_33.png" /> S2_ZM-MB'
            });
var format_S2_ZMDOB_34 = new ol.format.GeoJSON();
var features_S2_ZMDOB_34 = format_S2_ZMDOB_34.readFeatures(json_S2_ZMDOB_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S2_ZMDOB_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S2_ZMDOB_34.addFeatures(features_S2_ZMDOB_34);
var lyr_S2_ZMDOB_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S2_ZMDOB_34, 
                style: style_S2_ZMDOB_34,
                interactive: false,
                title: '<img src="styles/legend/S2_ZMDOB_34.png" /> S2_ZM-DOB'
            });
var format_S2_LJZM_35 = new ol.format.GeoJSON();
var features_S2_LJZM_35 = format_S2_LJZM_35.readFeatures(json_S2_LJZM_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S2_LJZM_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S2_LJZM_35.addFeatures(features_S2_LJZM_35);
var lyr_S2_LJZM_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S2_LJZM_35, 
                style: style_S2_LJZM_35,
                interactive: false,
                title: '<img src="styles/legend/S2_LJZM_35.png" /> S2_LJ-ZM'
            });
var format_S2_DISE_36 = new ol.format.GeoJSON();
var features_S2_DISE_36 = format_S2_DISE_36.readFeatures(json_S2_DISE_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S2_DISE_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S2_DISE_36.addFeatures(features_S2_DISE_36);
var lyr_S2_DISE_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S2_DISE_36, 
                style: style_S2_DISE_36,
                interactive: false,
                title: '<img src="styles/legend/S2_DISE_36.png" /> S2_DI-SEŽ'
            });
var format_S2LJDI_37 = new ol.format.GeoJSON();
var features_S2LJDI_37 = format_S2LJDI_37.readFeatures(json_S2LJDI_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S2LJDI_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S2LJDI_37.addFeatures(features_S2LJDI_37);
var lyr_S2LJDI_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S2LJDI_37, 
                style: style_S2LJDI_37,
                interactive: false,
                title: '<img src="styles/legend/S2LJDI_37.png" /> S2-LJ-DI'
            });
var format_Koridorske_S2_deviacije_38 = new ol.format.GeoJSON();
var features_Koridorske_S2_deviacije_38 = format_Koridorske_S2_deviacije_38.readFeatures(json_Koridorske_S2_deviacije_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Koridorske_S2_deviacije_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Koridorske_S2_deviacije_38.addFeatures(features_Koridorske_S2_deviacije_38);
var lyr_Koridorske_S2_deviacije_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Koridorske_S2_deviacije_38, 
                style: style_Koridorske_S2_deviacije_38,
                interactive: false,
                title: '<img src="styles/legend/Koridorske_S2_deviacije_38.png" /> Koridorske_S2_deviacije'
            });
var format_K2_LJZMCEMB_39 = new ol.format.GeoJSON();
var features_K2_LJZMCEMB_39 = format_K2_LJZMCEMB_39.readFeatures(json_K2_LJZMCEMB_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K2_LJZMCEMB_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K2_LJZMCEMB_39.addFeatures(features_K2_LJZMCEMB_39);
var lyr_K2_LJZMCEMB_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K2_LJZMCEMB_39, 
                style: style_K2_LJZMCEMB_39,
                interactive: false,
                title: '<img src="styles/legend/K2_LJZMCEMB_39.png" /> K2_LJ-ZM-CE-MB'
            });
var format_K2_ZMDO_40 = new ol.format.GeoJSON();
var features_K2_ZMDO_40 = format_K2_ZMDO_40.readFeatures(json_K2_ZMDO_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K2_ZMDO_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K2_ZMDO_40.addFeatures(features_K2_ZMDO_40);
var lyr_K2_ZMDO_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K2_ZMDO_40, 
                style: style_K2_ZMDO_40,
                interactive: false,
                title: '<img src="styles/legend/K2_ZMDO_40.png" /> K2_ZM-DO'
            });
var format_K2_LJDI_41 = new ol.format.GeoJSON();
var features_K2_LJDI_41 = format_K2_LJDI_41.readFeatures(json_K2_LJDI_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K2_LJDI_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K2_LJDI_41.addFeatures(features_K2_LJDI_41);
var lyr_K2_LJDI_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K2_LJDI_41, 
                style: style_K2_LJDI_41,
                interactive: false,
                title: '<img src="styles/legend/K2_LJDI_41.png" /> K2_LJ-DI'
            });
var format_K3LJJES_42 = new ol.format.GeoJSON();
var features_K3LJJES_42 = format_K3LJJES_42.readFeatures(json_K3LJJES_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K3LJJES_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K3LJJES_42.addFeatures(features_K3LJJES_42);
var lyr_K3LJJES_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K3LJJES_42, 
                style: style_K3LJJES_42,
                interactive: false,
                title: '<img src="styles/legend/K3LJJES_42.png" /> K3 LJ-JES'
            });
var format_K3_LJZMSuhadol_43 = new ol.format.GeoJSON();
var features_K3_LJZMSuhadol_43 = format_K3_LJZMSuhadol_43.readFeatures(json_K3_LJZMSuhadol_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K3_LJZMSuhadol_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K3_LJZMSuhadol_43.addFeatures(features_K3_LJZMSuhadol_43);
var lyr_K3_LJZMSuhadol_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K3_LJZMSuhadol_43, 
                style: style_K3_LJZMSuhadol_43,
                interactive: false,
                title: '<img src="styles/legend/K3_LJZMSuhadol_43.png" /> K3_LJ-ZM(Suhadol)'
            });
var format_K3_MBMS_44 = new ol.format.GeoJSON();
var features_K3_MBMS_44 = format_K3_MBMS_44.readFeatures(json_K3_MBMS_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K3_MBMS_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K3_MBMS_44.addFeatures(features_K3_MBMS_44);
var lyr_K3_MBMS_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K3_MBMS_44, 
                style: style_K3_MBMS_44,
                interactive: false,
                title: '<img src="styles/legend/K3_MBMS_44.png" /> K3_MB-MS'
            });
var format_K3_ZMSuhadolCE_45 = new ol.format.GeoJSON();
var features_K3_ZMSuhadolCE_45 = format_K3_ZMSuhadolCE_45.readFeatures(json_K3_ZMSuhadolCE_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K3_ZMSuhadolCE_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K3_ZMSuhadolCE_45.addFeatures(features_K3_ZMSuhadolCE_45);
var lyr_K3_ZMSuhadolCE_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K3_ZMSuhadolCE_45, 
                style: style_K3_ZMSuhadolCE_45,
                interactive: false,
                title: '<img src="styles/legend/K3_ZMSuhadolCE_45.png" /> K3_ZM(Suhadol)-CE'
            });
var format_K3_CEMB_46 = new ol.format.GeoJSON();
var features_K3_CEMB_46 = format_K3_CEMB_46.readFeatures(json_K3_CEMB_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K3_CEMB_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K3_CEMB_46.addFeatures(features_K3_CEMB_46);
var lyr_K3_CEMB_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K3_CEMB_46, 
                style: style_K3_CEMB_46,
                interactive: false,
                title: '<img src="styles/legend/K3_CEMB_46.png" /> K3_CE-MB'
            });
var format_K3_DIIT_47 = new ol.format.GeoJSON();
var features_K3_DIIT_47 = format_K3_DIIT_47.readFeatures(json_K3_DIIT_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K3_DIIT_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K3_DIIT_47.addFeatures(features_K3_DIIT_47);
var lyr_K3_DIIT_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K3_DIIT_47, 
                style: style_K3_DIIT_47,
                interactive: false,
                title: '<img src="styles/legend/K3_DIIT_47.png" /> K3_DI-IT'
            });
var format_K3_LJDI_48 = new ol.format.GeoJSON();
var features_K3_LJDI_48 = format_K3_LJDI_48.readFeatures(json_K3_LJDI_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K3_LJDI_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K3_LJDI_48.addFeatures(features_K3_LJDI_48);
var lyr_K3_LJDI_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K3_LJDI_48, 
                style: style_K3_LJDI_48,
                interactive: false,
                title: '<img src="styles/legend/K3_LJDI_48.png" /> K3_LJ-DI'
            });
var format_LV_V4_49 = new ol.format.GeoJSON();
var features_LV_V4_49 = format_LV_V4_49.readFeatures(json_LV_V4_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LV_V4_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LV_V4_49.addFeatures(features_LV_V4_49);
var lyr_LV_V4_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LV_V4_49, 
                style: style_LV_V4_49,
                interactive: false,
                title: '<img src="styles/legend/LV_V4_49.png" /> LŽV_V4'
            });
var format_Novepostaje_50 = new ol.format.GeoJSON();
var features_Novepostaje_50 = format_Novepostaje_50.readFeatures(json_Novepostaje_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Novepostaje_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Novepostaje_50.addFeatures(features_Novepostaje_50);
var lyr_Novepostaje_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Novepostaje_50, 
                style: style_Novepostaje_50,
                interactive: false,
                title: '<img src="styles/legend/Novepostaje_50.png" /> Nove postaje'
            });
var format_Stinetoke_K2_51 = new ol.format.GeoJSON();
var features_Stinetoke_K2_51 = format_Stinetoke_K2_51.readFeatures(json_Stinetoke_K2_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stinetoke_K2_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stinetoke_K2_51.addFeatures(features_Stinetoke_K2_51);
var lyr_Stinetoke_K2_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stinetoke_K2_51, 
                style: style_Stinetoke_K2_51,
                interactive: false,
                title: '<img src="styles/legend/Stinetoke_K2_51.png" /> Stične točke_K2'
            });
var format_Sticnetocke_K3_52 = new ol.format.GeoJSON();
var features_Sticnetocke_K3_52 = format_Sticnetocke_K3_52.readFeatures(json_Sticnetocke_K3_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sticnetocke_K3_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sticnetocke_K3_52.addFeatures(features_Sticnetocke_K3_52);
var lyr_Sticnetocke_K3_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sticnetocke_K3_52, 
                style: style_Sticnetocke_K3_52,
                interactive: false,
                title: '<img src="styles/legend/Sticnetocke_K3_52.png" /> Sticne tocke_K3'
            });
var group_K3 = new ol.layer.Group({
                                layers: [lyr_K3LJJES_42,lyr_K3_LJZMSuhadol_43,lyr_K3_MBMS_44,lyr_K3_ZMSuhadolCE_45,lyr_K3_CEMB_46,lyr_K3_DIIT_47,lyr_K3_LJDI_48,],
                                title: "K3"});
var group_K2 = new ol.layer.Group({
                                layers: [lyr_K2_LJZMCEMB_39,lyr_K2_ZMDO_40,lyr_K2_LJDI_41,],
                                title: "K2"});
var group_Koridorske_S2 = new ol.layer.Group({
                                layers: [lyr_S2_ORSredie_30,lyr_S2_ORHodo_31,lyr_S2_PIIB_32,lyr_S2_ZMMB_33,lyr_S2_ZMDOB_34,lyr_S2_LJZM_35,lyr_S2_DISE_36,lyr_S2LJDI_37,lyr_Koridorske_S2_deviacije_38,],
                                title: "Koridorske_S2"});
var group_RegioLURR2 = new ol.layer.Group({
                                layers: [lyr_R2_Dolenjskaproga_26,lyr_R2_DomaleKranjZlatoPolje_27,lyr_R2_MosteDomale_28,lyr_R2_Kamnikaproga_29,],
                                title: "Regio-LUR R2"});
var group_Nadgradnjeobstojeihprog = new ol.layer.Group({
                                layers: [lyr_Dvotirnost_KRJES_18,lyr_Dvotirnost_LJKR_19,lyr_Dvotirnost_MBentilj_20,lyr_Nadgradnja_MBRU_21,lyr_Nadgradnja_CEVE_22,lyr_Nadgradnja_ZMDOB_23,lyr_Nadgradnja_DISE_24,lyr_Nadgradnja_LJDI_25,],
                                title: "Nadgradnje obstoječih prog"});
var group_Obstojeeomreje = new ol.layer.Group({
                                layers: [lyr_CesteACinHC_14,lyr_Obstojeeproge_15,lyr_Obstojeepostaje_16,lyr_DivaaKoper2tir_17,],
                                title: "Obstoječe omrežje"});
var group_Okoljeinprostor = new ol.layer.Group({
                                layers: [lyr_Kulturna_dediscina_10,lyr_Natura_2000_11,lyr_VVO_dravni_nivo_12,lyr_VVO_obcinski_nivo_13,],
                                title: "Okolje in prostor"});
var group_Zalednikoridorjihitrihprog = new ol.layer.Group({
                                layers: [lyr_IT_5,lyr_AT_6,lyr_HU_7,lyr_HR_8,lyr_Slovenija_9,],
                                title: "Zaledni koridorji hitrih prog"});
var group_Podloge = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_Esritopo_1,lyr_Esrisatelit_2,lyr_Carto_light_nolabels_3,lyr_Drave_4,],
                                title: "Podloge"});

lyr_OpenStreetMap_0.setVisible(false);lyr_Esritopo_1.setVisible(false);lyr_Esrisatelit_2.setVisible(false);lyr_Carto_light_nolabels_3.setVisible(false);lyr_Drave_4.setVisible(false);lyr_IT_5.setVisible(false);lyr_AT_6.setVisible(false);lyr_HU_7.setVisible(false);lyr_HR_8.setVisible(false);lyr_Slovenija_9.setVisible(false);lyr_Kulturna_dediscina_10.setVisible(false);lyr_Natura_2000_11.setVisible(false);lyr_VVO_dravni_nivo_12.setVisible(false);lyr_VVO_obcinski_nivo_13.setVisible(false);lyr_CesteACinHC_14.setVisible(true);lyr_Obstojeeproge_15.setVisible(true);lyr_Obstojeepostaje_16.setVisible(true);lyr_DivaaKoper2tir_17.setVisible(true);lyr_Dvotirnost_KRJES_18.setVisible(false);lyr_Dvotirnost_LJKR_19.setVisible(false);lyr_Dvotirnost_MBentilj_20.setVisible(false);lyr_Nadgradnja_MBRU_21.setVisible(false);lyr_Nadgradnja_CEVE_22.setVisible(false);lyr_Nadgradnja_ZMDOB_23.setVisible(false);lyr_Nadgradnja_DISE_24.setVisible(false);lyr_Nadgradnja_LJDI_25.setVisible(false);lyr_R2_Dolenjskaproga_26.setVisible(false);lyr_R2_DomaleKranjZlatoPolje_27.setVisible(false);lyr_R2_MosteDomale_28.setVisible(false);lyr_R2_Kamnikaproga_29.setVisible(false);lyr_S2_ORSredie_30.setVisible(false);lyr_S2_ORHodo_31.setVisible(false);lyr_S2_PIIB_32.setVisible(false);lyr_S2_ZMMB_33.setVisible(false);lyr_S2_ZMDOB_34.setVisible(false);lyr_S2_LJZM_35.setVisible(false);lyr_S2_DISE_36.setVisible(false);lyr_S2LJDI_37.setVisible(false);lyr_Koridorske_S2_deviacije_38.setVisible(false);lyr_K2_LJZMCEMB_39.setVisible(true);lyr_K2_ZMDO_40.setVisible(true);lyr_K2_LJDI_41.setVisible(true);lyr_K3LJJES_42.setVisible(true);lyr_K3_LJZMSuhadol_43.setVisible(true);lyr_K3_MBMS_44.setVisible(true);lyr_K3_ZMSuhadolCE_45.setVisible(true);lyr_K3_CEMB_46.setVisible(true);lyr_K3_DIIT_47.setVisible(true);lyr_K3_LJDI_48.setVisible(true);lyr_LV_V4_49.setVisible(false);lyr_Novepostaje_50.setVisible(false);lyr_Stinetoke_K2_51.setVisible(true);lyr_Sticnetocke_K3_52.setVisible(false);
var layersList = [group_Podloge,group_Zalednikoridorjihitrihprog,group_Okoljeinprostor,group_Obstojeeomreje,group_Nadgradnjeobstojeihprog,group_RegioLURR2,group_Koridorske_S2,group_K2,group_K3,lyr_LV_V4_49,lyr_Novepostaje_50,lyr_Stinetoke_K2_51,lyr_Sticnetocke_K3_52];
lyr_Drave_4.set('fieldAliases', {'FID_3': 'FID_3', 'NUTS_3': 'NUTS_3', 'NAME_NUTS3': 'NAME_NUTS3', 'FID_2': 'FID_2', 'NUTS_2': 'NUTS_2', 'NAME_NUTS2': 'NAME_NUTS2', 'FID_1': 'FID_1', 'NUTS_1': 'NUTS_1', 'NAME_NUTS1': 'NAME_NUTS1', 'FID_0': 'FID_0', 'NUTS_0': 'NUTS_0', 'NAME_NUTS0': 'NAME_NUTS0', 'orig_pov': 'orig_pov', });
lyr_Slovenija_9.set('fieldAliases', {'UE_MID': 'UE_MID', 'UE_ID': 'UE_ID', 'UE_IME': 'UE_IME', 'D_OD': 'D_OD', 'POVRSINA': 'POVRSINA', 'Y_C': 'Y_C', 'X_C': 'X_C', 'UE_STDM': 'UE_STDM', });
lyr_Kulturna_dediscina_10.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_Natura_2000_11.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', });
lyr_VVO_dravni_nivo_12.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_VVO_obcinski_nivo_13.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_CesteACinHC_14.set('fieldAliases', {'NO': 'NO', 'R_NO': 'R_NO', });
lyr_Obstojeeproge_15.set('fieldAliases', {'qc_id': 'qc_id', 'sž_ime_p~': 'sž_ime_p~', 'sž_kateg~': 'sž_kateg~', 'sž_števi': 'sž_števi', 'length': 'length', });
lyr_Obstojeepostaje_16.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'name': 'name', });
lyr_DivaaKoper2tir_17.set('fieldAliases', {'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_Dvotirnost_KRJES_18.set('fieldAliases', {'length': 'length', });
lyr_Dvotirnost_LJKR_19.set('fieldAliases', {'length': 'length', });
lyr_Dvotirnost_MBentilj_20.set('fieldAliases', {'length': 'length', });
lyr_Nadgradnja_MBRU_21.set('fieldAliases', {'length': 'length', });
lyr_Nadgradnja_CEVE_22.set('fieldAliases', {'length': 'length', });
lyr_Nadgradnja_ZMDOB_23.set('fieldAliases', {'length': 'length', });
lyr_Nadgradnja_DISE_24.set('fieldAliases', {'length': 'length', });
lyr_Nadgradnja_LJDI_25.set('fieldAliases', {'length': 'length', });
lyr_R2_Dolenjskaproga_26.set('fieldAliases', {'length': 'length', });
lyr_R2_DomaleKranjZlatoPolje_27.set('fieldAliases', {'length': 'length', });
lyr_R2_MosteDomale_28.set('fieldAliases', {'length': 'length', });
lyr_R2_Kamnikaproga_29.set('fieldAliases', {'length': 'length', });
lyr_S2_ORSredie_30.set('fieldAliases', {'length': 'length', });
lyr_S2_ORHodo_31.set('fieldAliases', {'length': 'length', });
lyr_S2_PIIB_32.set('fieldAliases', {'length': 'length', });
lyr_S2_ZMMB_33.set('fieldAliases', {'length': 'length', });
lyr_S2_ZMDOB_34.set('fieldAliases', {'length': 'length', });
lyr_S2_LJZM_35.set('fieldAliases', {'length': 'length', });
lyr_S2_DISE_36.set('fieldAliases', {'length': 'length', });
lyr_S2LJDI_37.set('fieldAliases', {'length': 'length', });
lyr_Koridorske_S2_deviacije_38.set('fieldAliases', {'length': 'length', });
lyr_K2_LJZMCEMB_39.set('fieldAliases', {'Length': 'Length', });
lyr_K2_ZMDO_40.set('fieldAliases', {'length': 'length', });
lyr_K2_LJDI_41.set('fieldAliases', {'Length': 'Length', });
lyr_K3LJJES_42.set('fieldAliases', {'Length': 'Length', });
lyr_K3_LJZMSuhadol_43.set('fieldAliases', {'length': 'length', });
lyr_K3_MBMS_44.set('fieldAliases', {'LENGTH': 'LENGTH', });
lyr_K3_ZMSuhadolCE_45.set('fieldAliases', {'length': 'length', });
lyr_K3_CEMB_46.set('fieldAliases', {'length': 'length', });
lyr_K3_DIIT_47.set('fieldAliases', {'length': 'length', });
lyr_K3_LJDI_48.set('fieldAliases', {'LENGTH': 'LENGTH', });
lyr_LV_V4_49.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_Novepostaje_50.set('fieldAliases', {'fid': 'fid', 'Ime': 'Ime', 'Potencial': 'Potencial', });
lyr_Stinetoke_K2_51.set('fieldAliases', {'id': 'id', 'Ime': 'Ime', });
lyr_Sticnetocke_K3_52.set('fieldAliases', {'id': 'id', 'Ime': 'Ime', });
lyr_Drave_4.set('fieldImages', {'FID_3': 'Range', 'NUTS_3': 'TextEdit', 'NAME_NUTS3': 'TextEdit', 'FID_2': 'Range', 'NUTS_2': 'TextEdit', 'NAME_NUTS2': 'TextEdit', 'FID_1': 'Range', 'NUTS_1': 'TextEdit', 'NAME_NUTS1': 'TextEdit', 'FID_0': 'TextEdit', 'NUTS_0': 'TextEdit', 'NAME_NUTS0': 'TextEdit', 'orig_pov': 'TextEdit', });
lyr_Slovenija_9.set('fieldImages', {'UE_MID': '', 'UE_ID': '', 'UE_IME': '', 'D_OD': '', 'POVRSINA': '', 'Y_C': '', 'X_C': '', 'UE_STDM': '', });
lyr_Kulturna_dediscina_10.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_Natura_2000_11.set('fieldImages', {'qc_id': 'TextEdit', 'objectid': 'TextEdit', });
lyr_VVO_dravni_nivo_12.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_VVO_obcinski_nivo_13.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_CesteACinHC_14.set('fieldImages', {'NO': 'TextEdit', 'R_NO': 'TextEdit', });
lyr_Obstojeeproge_15.set('fieldImages', {'qc_id': 'TextEdit', 'sž_ime_p~': 'TextEdit', 'sž_kateg~': 'TextEdit', 'sž_števi': 'TextEdit', 'length': '', });
lyr_Obstojeepostaje_16.set('fieldImages', {'qc_id': 'TextEdit', 'no': 'TextEdit', 'name': 'TextEdit', });
lyr_DivaaKoper2tir_17.set('fieldImages', {'Tipodseka': 'TextEdit', 'Length': 'TextEdit', });
lyr_Dvotirnost_KRJES_18.set('fieldImages', {'length': 'Range', });
lyr_Dvotirnost_LJKR_19.set('fieldImages', {'length': 'Range', });
lyr_Dvotirnost_MBentilj_20.set('fieldImages', {'length': 'Range', });
lyr_Nadgradnja_MBRU_21.set('fieldImages', {'length': 'Range', });
lyr_Nadgradnja_CEVE_22.set('fieldImages', {'length': 'Range', });
lyr_Nadgradnja_ZMDOB_23.set('fieldImages', {'length': 'Range', });
lyr_Nadgradnja_DISE_24.set('fieldImages', {'length': 'Range', });
lyr_Nadgradnja_LJDI_25.set('fieldImages', {'length': 'TextEdit', });
lyr_R2_Dolenjskaproga_26.set('fieldImages', {'length': '', });
lyr_R2_DomaleKranjZlatoPolje_27.set('fieldImages', {'length': '', });
lyr_R2_MosteDomale_28.set('fieldImages', {'length': '', });
lyr_R2_Kamnikaproga_29.set('fieldImages', {'length': '', });
lyr_S2_ORSredie_30.set('fieldImages', {'length': 'Range', });
lyr_S2_ORHodo_31.set('fieldImages', {'length': 'Range', });
lyr_S2_PIIB_32.set('fieldImages', {'length': 'Range', });
lyr_S2_ZMMB_33.set('fieldImages', {'length': 'Range', });
lyr_S2_ZMDOB_34.set('fieldImages', {'length': 'Range', });
lyr_S2_LJZM_35.set('fieldImages', {'length': 'Range', });
lyr_S2_DISE_36.set('fieldImages', {'length': 'Range', });
lyr_S2LJDI_37.set('fieldImages', {'length': 'TextEdit', });
lyr_Koridorske_S2_deviacije_38.set('fieldImages', {'length': '', });
lyr_K2_LJZMCEMB_39.set('fieldImages', {'Length': '', });
lyr_K2_ZMDO_40.set('fieldImages', {'length': 'TextEdit', });
lyr_K2_LJDI_41.set('fieldImages', {'Length': '', });
lyr_K3LJJES_42.set('fieldImages', {'Length': 'Range', });
lyr_K3_LJZMSuhadol_43.set('fieldImages', {'length': 'TextEdit', });
lyr_K3_MBMS_44.set('fieldImages', {'LENGTH': '', });
lyr_K3_ZMSuhadolCE_45.set('fieldImages', {'length': 'TextEdit', });
lyr_K3_CEMB_46.set('fieldImages', {'length': 'TextEdit', });
lyr_K3_DIIT_47.set('fieldImages', {'length': '', });
lyr_K3_LJDI_48.set('fieldImages', {'LENGTH': '', });
lyr_LV_V4_49.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_Novepostaje_50.set('fieldImages', {'fid': 'TextEdit', 'Ime': 'TextEdit', 'Potencial': 'Range', });
lyr_Stinetoke_K2_51.set('fieldImages', {'id': 'TextEdit', 'Ime': 'TextEdit', });
lyr_Sticnetocke_K3_52.set('fieldImages', {'id': 'TextEdit', 'Ime': 'TextEdit', });
lyr_Drave_4.set('fieldLabels', {});
lyr_Slovenija_9.set('fieldLabels', {});
lyr_Kulturna_dediscina_10.set('fieldLabels', {});
lyr_Natura_2000_11.set('fieldLabels', {});
lyr_VVO_dravni_nivo_12.set('fieldLabels', {});
lyr_VVO_obcinski_nivo_13.set('fieldLabels', {});
lyr_CesteACinHC_14.set('fieldLabels', {});
lyr_Obstojeeproge_15.set('fieldLabels', {});
lyr_Obstojeepostaje_16.set('fieldLabels', {});
lyr_DivaaKoper2tir_17.set('fieldLabels', {});
lyr_Dvotirnost_KRJES_18.set('fieldLabels', {});
lyr_Dvotirnost_LJKR_19.set('fieldLabels', {});
lyr_Dvotirnost_MBentilj_20.set('fieldLabels', {});
lyr_Nadgradnja_MBRU_21.set('fieldLabels', {});
lyr_Nadgradnja_CEVE_22.set('fieldLabels', {});
lyr_Nadgradnja_ZMDOB_23.set('fieldLabels', {});
lyr_Nadgradnja_DISE_24.set('fieldLabels', {});
lyr_Nadgradnja_LJDI_25.set('fieldLabels', {});
lyr_R2_Dolenjskaproga_26.set('fieldLabels', {});
lyr_R2_DomaleKranjZlatoPolje_27.set('fieldLabels', {});
lyr_R2_MosteDomale_28.set('fieldLabels', {});
lyr_R2_Kamnikaproga_29.set('fieldLabels', {});
lyr_S2_ORSredie_30.set('fieldLabels', {});
lyr_S2_ORHodo_31.set('fieldLabels', {});
lyr_S2_PIIB_32.set('fieldLabels', {});
lyr_S2_ZMMB_33.set('fieldLabels', {});
lyr_S2_ZMDOB_34.set('fieldLabels', {});
lyr_S2_LJZM_35.set('fieldLabels', {});
lyr_S2_DISE_36.set('fieldLabels', {});
lyr_S2LJDI_37.set('fieldLabels', {});
lyr_Koridorske_S2_deviacije_38.set('fieldLabels', {});
lyr_K2_LJZMCEMB_39.set('fieldLabels', {});
lyr_K2_ZMDO_40.set('fieldLabels', {});
lyr_K2_LJDI_41.set('fieldLabels', {});
lyr_K3LJJES_42.set('fieldLabels', {});
lyr_K3_LJZMSuhadol_43.set('fieldLabels', {});
lyr_K3_MBMS_44.set('fieldLabels', {});
lyr_K3_ZMSuhadolCE_45.set('fieldLabels', {});
lyr_K3_CEMB_46.set('fieldLabels', {});
lyr_K3_DIIT_47.set('fieldLabels', {});
lyr_K3_LJDI_48.set('fieldLabels', {});
lyr_LV_V4_49.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_Novepostaje_50.set('fieldLabels', {'fid': 'no label', 'Ime': 'no label', 'Potencial': 'no label', });
lyr_Stinetoke_K2_51.set('fieldLabels', {'id': 'no label', 'Ime': 'no label', });
lyr_Sticnetocke_K3_52.set('fieldLabels', {'id': 'no label', 'Ime': 'no label', });
lyr_Sticnetocke_K3_52.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});