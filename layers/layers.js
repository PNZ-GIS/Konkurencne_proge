var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
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
var format_MariborMurskaSobota_18 = new ol.format.GeoJSON();
var features_MariborMurskaSobota_18 = format_MariborMurskaSobota_18.readFeatures(json_MariborMurskaSobota_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MariborMurskaSobota_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MariborMurskaSobota_18.addFeatures(features_MariborMurskaSobota_18);
var lyr_MariborMurskaSobota_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MariborMurskaSobota_18, 
                style: style_MariborMurskaSobota_18,
                interactive: false,
                title: '<img src="styles/legend/MariborMurskaSobota_18.png" /> Maribor-Murska Sobota '
            });
var format_PredorZalogBrezovica_19 = new ol.format.GeoJSON();
var features_PredorZalogBrezovica_19 = format_PredorZalogBrezovica_19.readFeatures(json_PredorZalogBrezovica_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PredorZalogBrezovica_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PredorZalogBrezovica_19.addFeatures(features_PredorZalogBrezovica_19);
var lyr_PredorZalogBrezovica_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PredorZalogBrezovica_19, 
                style: style_PredorZalogBrezovica_19,
                interactive: false,
                title: '<img src="styles/legend/PredorZalogBrezovica_19.png" /> Predor Zalog - Brezovica'
            });
var format_Optimiziranipredori_20 = new ol.format.GeoJSON();
var features_Optimiziranipredori_20 = format_Optimiziranipredori_20.readFeatures(json_Optimiziranipredori_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Optimiziranipredori_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Optimiziranipredori_20.addFeatures(features_Optimiziranipredori_20);
var lyr_Optimiziranipredori_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Optimiziranipredori_20, 
                style: style_Optimiziranipredori_20,
                interactive: false,
                title: '<img src="styles/legend/Optimiziranipredori_20.png" /> Optimizirani predori '
            });
var format_Vzhodnojunaobvoznica_21 = new ol.format.GeoJSON();
var features_Vzhodnojunaobvoznica_21 = format_Vzhodnojunaobvoznica_21.readFeatures(json_Vzhodnojunaobvoznica_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vzhodnojunaobvoznica_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vzhodnojunaobvoznica_21.addFeatures(features_Vzhodnojunaobvoznica_21);
var lyr_Vzhodnojunaobvoznica_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vzhodnojunaobvoznica_21, 
                style: style_Vzhodnojunaobvoznica_21,
                interactive: false,
                title: '<img src="styles/legend/Vzhodnojunaobvoznica_21.png" /> Vzhodno-južna obvoznica'
            });
var format_Severnozahodnaobvoznica_22 = new ol.format.GeoJSON();
var features_Severnozahodnaobvoznica_22 = format_Severnozahodnaobvoznica_22.readFeatures(json_Severnozahodnaobvoznica_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Severnozahodnaobvoznica_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Severnozahodnaobvoznica_22.addFeatures(features_Severnozahodnaobvoznica_22);
var lyr_Severnozahodnaobvoznica_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Severnozahodnaobvoznica_22, 
                style: style_Severnozahodnaobvoznica_22,
                interactive: false,
                title: '<img src="styles/legend/Severnozahodnaobvoznica_22.png" /> Severno-zahodna obvoznica'
            });
var format_LJDI_23 = new ol.format.GeoJSON();
var features_LJDI_23 = format_LJDI_23.readFeatures(json_LJDI_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LJDI_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LJDI_23.addFeatures(features_LJDI_23);
var lyr_LJDI_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LJDI_23, 
                style: style_LJDI_23,
                interactive: false,
                title: '<img src="styles/legend/LJDI_23.png" /> LJ-DI'
            });
var format_LJMB_24 = new ol.format.GeoJSON();
var features_LJMB_24 = format_LJMB_24.readFeatures(json_LJMB_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LJMB_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LJMB_24.addFeatures(features_LJMB_24);
var lyr_LJMB_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LJMB_24, 
                style: style_LJMB_24,
                interactive: false,
                title: '<img src="styles/legend/LJMB_24.png" /> LJ-MB'
            });
var format_Dolenjskaproga_25 = new ol.format.GeoJSON();
var features_Dolenjskaproga_25 = format_Dolenjskaproga_25.readFeatures(json_Dolenjskaproga_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dolenjskaproga_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dolenjskaproga_25.addFeatures(features_Dolenjskaproga_25);
var lyr_Dolenjskaproga_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dolenjskaproga_25, 
                style: style_Dolenjskaproga_25,
                interactive: false,
                title: '<img src="styles/legend/Dolenjskaproga_25.png" /> Dolenjska proga'
            });
var format_DomaleKranjZlatoPolje_26 = new ol.format.GeoJSON();
var features_DomaleKranjZlatoPolje_26 = format_DomaleKranjZlatoPolje_26.readFeatures(json_DomaleKranjZlatoPolje_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DomaleKranjZlatoPolje_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DomaleKranjZlatoPolje_26.addFeatures(features_DomaleKranjZlatoPolje_26);
var lyr_DomaleKranjZlatoPolje_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DomaleKranjZlatoPolje_26, 
                style: style_DomaleKranjZlatoPolje_26,
                interactive: false,
                title: '<img src="styles/legend/DomaleKranjZlatoPolje_26.png" /> Domžale-Kranj Zlato Polje'
            });
var format_MosteDomale_27 = new ol.format.GeoJSON();
var features_MosteDomale_27 = format_MosteDomale_27.readFeatures(json_MosteDomale_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MosteDomale_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MosteDomale_27.addFeatures(features_MosteDomale_27);
var lyr_MosteDomale_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MosteDomale_27, 
                style: style_MosteDomale_27,
                interactive: false,
                title: '<img src="styles/legend/MosteDomale_27.png" /> Moste-Domžale'
            });
var format_Zahodnaobvoznaproga_28 = new ol.format.GeoJSON();
var features_Zahodnaobvoznaproga_28 = format_Zahodnaobvoznaproga_28.readFeatures(json_Zahodnaobvoznaproga_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zahodnaobvoznaproga_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zahodnaobvoznaproga_28.addFeatures(features_Zahodnaobvoznaproga_28);
var lyr_Zahodnaobvoznaproga_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zahodnaobvoznaproga_28, 
                style: style_Zahodnaobvoznaproga_28,
                interactive: false,
                title: '<img src="styles/legend/Zahodnaobvoznaproga_28.png" /> Zahodna obvozna proga'
            });
var format_Kamnikaproga_29 = new ol.format.GeoJSON();
var features_Kamnikaproga_29 = format_Kamnikaproga_29.readFeatures(json_Kamnikaproga_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kamnikaproga_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kamnikaproga_29.addFeatures(features_Kamnikaproga_29);
var lyr_Kamnikaproga_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kamnikaproga_29, 
                style: style_Kamnikaproga_29,
                interactive: false,
                title: '<img src="styles/legend/Kamnikaproga_29.png" /> Kamniška proga'
            });
var format_NakazanasmerZidaniMostDobova_30 = new ol.format.GeoJSON();
var features_NakazanasmerZidaniMostDobova_30 = format_NakazanasmerZidaniMostDobova_30.readFeatures(json_NakazanasmerZidaniMostDobova_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NakazanasmerZidaniMostDobova_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NakazanasmerZidaniMostDobova_30.addFeatures(features_NakazanasmerZidaniMostDobova_30);
var lyr_NakazanasmerZidaniMostDobova_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NakazanasmerZidaniMostDobova_30, 
                style: style_NakazanasmerZidaniMostDobova_30,
                interactive: false,
                title: '<img src="styles/legend/NakazanasmerZidaniMostDobova_30.png" /> Nakazana smer Zidani Most-Dobova'
            });
var format_NavezavaZasavjeCelje_31 = new ol.format.GeoJSON();
var features_NavezavaZasavjeCelje_31 = format_NavezavaZasavjeCelje_31.readFeatures(json_NavezavaZasavjeCelje_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NavezavaZasavjeCelje_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NavezavaZasavjeCelje_31.addFeatures(features_NavezavaZasavjeCelje_31);
var lyr_NavezavaZasavjeCelje_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NavezavaZasavjeCelje_31, 
                style: style_NavezavaZasavjeCelje_31,
                interactive: false,
                title: '<img src="styles/legend/NavezavaZasavjeCelje_31.png" /> Navezava Zasavje-Celje'
            });
var format_LjubljanaZidaniMost_32 = new ol.format.GeoJSON();
var features_LjubljanaZidaniMost_32 = format_LjubljanaZidaniMost_32.readFeatures(json_LjubljanaZidaniMost_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaZidaniMost_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaZidaniMost_32.addFeatures(features_LjubljanaZidaniMost_32);
var lyr_LjubljanaZidaniMost_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaZidaniMost_32, 
                style: style_LjubljanaZidaniMost_32,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaZidaniMost_32.png" /> Ljubljana-Zidani Most'
            });
var format_LjubljanaDivaa_33 = new ol.format.GeoJSON();
var features_LjubljanaDivaa_33 = format_LjubljanaDivaa_33.readFeatures(json_LjubljanaDivaa_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaDivaa_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaDivaa_33.addFeatures(features_LjubljanaDivaa_33);
var lyr_LjubljanaDivaa_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaDivaa_33, 
                style: style_LjubljanaDivaa_33,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaDivaa_33.png" /> Ljubljana-Divača '
            });
var format_DivaaTri_34 = new ol.format.GeoJSON();
var features_DivaaTri_34 = format_DivaaTri_34.readFeatures(json_DivaaTri_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivaaTri_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivaaTri_34.addFeatures(features_DivaaTri_34);
var lyr_DivaaTri_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivaaTri_34, 
                style: style_DivaaTri_34,
                interactive: false,
                title: '<img src="styles/legend/DivaaTri_34.png" /> Divača-Tržič '
            });
var format_GrobelnoPragersko_35 = new ol.format.GeoJSON();
var features_GrobelnoPragersko_35 = format_GrobelnoPragersko_35.readFeatures(json_GrobelnoPragersko_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrobelnoPragersko_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrobelnoPragersko_35.addFeatures(features_GrobelnoPragersko_35);
var lyr_GrobelnoPragersko_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GrobelnoPragersko_35, 
                style: style_GrobelnoPragersko_35,
                interactive: false,
                title: '<img src="styles/legend/GrobelnoPragersko_35.png" /> Grobelno-Pragersko '
            });
var format_ZagorjeCelje_36 = new ol.format.GeoJSON();
var features_ZagorjeCelje_36 = format_ZagorjeCelje_36.readFeatures(json_ZagorjeCelje_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZagorjeCelje_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZagorjeCelje_36.addFeatures(features_ZagorjeCelje_36);
var lyr_ZagorjeCelje_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZagorjeCelje_36, 
                style: style_ZagorjeCelje_36,
                interactive: false,
                title: '<img src="styles/legend/ZagorjeCelje_36.png" /> Zagorje-Celje'
            });
var format_KresniceZagorje_37 = new ol.format.GeoJSON();
var features_KresniceZagorje_37 = format_KresniceZagorje_37.readFeatures(json_KresniceZagorje_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KresniceZagorje_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KresniceZagorje_37.addFeatures(features_KresniceZagorje_37);
var lyr_KresniceZagorje_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KresniceZagorje_37, 
                style: style_KresniceZagorje_37,
                interactive: false,
                title: '<img src="styles/legend/KresniceZagorje_37.png" /> Kresnice-Zagorje'
            });
var format_MariborZagreb_38 = new ol.format.GeoJSON();
var features_MariborZagreb_38 = format_MariborZagreb_38.readFeatures(json_MariborZagreb_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MariborZagreb_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MariborZagreb_38.addFeatures(features_MariborZagreb_38);
var lyr_MariborZagreb_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MariborZagreb_38, 
                style: style_MariborZagreb_38,
                interactive: false,
                title: '<img src="styles/legend/MariborZagreb_38.png" /> Maribor-Zagreb'
            });
var format_DivaaTrst_39 = new ol.format.GeoJSON();
var features_DivaaTrst_39 = format_DivaaTrst_39.readFeatures(json_DivaaTrst_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivaaTrst_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivaaTrst_39.addFeatures(features_DivaaTrst_39);
var lyr_DivaaTrst_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivaaTrst_39, 
                style: style_DivaaTrst_39,
                interactive: false,
                title: '<img src="styles/legend/DivaaTrst_39.png" /> Divača-Trst '
            });
var format_BeltinciLendava_40 = new ol.format.GeoJSON();
var features_BeltinciLendava_40 = format_BeltinciLendava_40.readFeatures(json_BeltinciLendava_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BeltinciLendava_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BeltinciLendava_40.addFeatures(features_BeltinciLendava_40);
var lyr_BeltinciLendava_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BeltinciLendava_40, 
                style: style_BeltinciLendava_40,
                interactive: false,
                title: '<img src="styles/legend/BeltinciLendava_40.png" /> Beltinci-Lendava'
            });
var format_LjubljanaDivaa_41 = new ol.format.GeoJSON();
var features_LjubljanaDivaa_41 = format_LjubljanaDivaa_41.readFeatures(json_LjubljanaDivaa_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaDivaa_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaDivaa_41.addFeatures(features_LjubljanaDivaa_41);
var lyr_LjubljanaDivaa_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaDivaa_41, 
                style: style_LjubljanaDivaa_41,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaDivaa_41.png" /> Ljubljana-Divača'
            });
var format_empeterPragersko_42 = new ol.format.GeoJSON();
var features_empeterPragersko_42 = format_empeterPragersko_42.readFeatures(json_empeterPragersko_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_empeterPragersko_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_empeterPragersko_42.addFeatures(features_empeterPragersko_42);
var lyr_empeterPragersko_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_empeterPragersko_42, 
                style: style_empeterPragersko_42,
                interactive: false,
                title: '<img src="styles/legend/empeterPragersko_42.png" /> Šempeter-Pragersko '
            });
var format_Celjepostaja_43 = new ol.format.GeoJSON();
var features_Celjepostaja_43 = format_Celjepostaja_43.readFeatures(json_Celjepostaja_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Celjepostaja_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Celjepostaja_43.addFeatures(features_Celjepostaja_43);
var lyr_Celjepostaja_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Celjepostaja_43, 
                style: style_Celjepostaja_43,
                interactive: false,
                title: '<img src="styles/legend/Celjepostaja_43.png" /> Celje postaja '
            });
var format_LevecCelje_44 = new ol.format.GeoJSON();
var features_LevecCelje_44 = format_LevecCelje_44.readFeatures(json_LevecCelje_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LevecCelje_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LevecCelje_44.addFeatures(features_LevecCelje_44);
var lyr_LevecCelje_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LevecCelje_44, 
                style: style_LevecCelje_44,
                interactive: false,
                title: '<img src="styles/legend/LevecCelje_44.png" /> Levec-Celje '
            });
var format_LjubljanaCelje_45 = new ol.format.GeoJSON();
var features_LjubljanaCelje_45 = format_LjubljanaCelje_45.readFeatures(json_LjubljanaCelje_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaCelje_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaCelje_45.addFeatures(features_LjubljanaCelje_45);
var lyr_LjubljanaCelje_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaCelje_45, 
                style: style_LjubljanaCelje_45,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaCelje_45.png" /> Ljubljana-Celje'
            });
var format_Zagorjeempeter_46 = new ol.format.GeoJSON();
var features_Zagorjeempeter_46 = format_Zagorjeempeter_46.readFeatures(json_Zagorjeempeter_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zagorjeempeter_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zagorjeempeter_46.addFeatures(features_Zagorjeempeter_46);
var lyr_Zagorjeempeter_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zagorjeempeter_46, 
                style: style_Zagorjeempeter_46,
                interactive: false,
                title: '<img src="styles/legend/Zagorjeempeter_46.png" /> Zagorje-Šempeter '
            });
var format_NavezavaBrnikFraport_47 = new ol.format.GeoJSON();
var features_NavezavaBrnikFraport_47 = format_NavezavaBrnikFraport_47.readFeatures(json_NavezavaBrnikFraport_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NavezavaBrnikFraport_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NavezavaBrnikFraport_47.addFeatures(features_NavezavaBrnikFraport_47);
var lyr_NavezavaBrnikFraport_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NavezavaBrnikFraport_47, 
                style: style_NavezavaBrnikFraport_47,
                interactive: false,
                title: '<img src="styles/legend/NavezavaBrnikFraport_47.png" /> Navezava Brnik (Fraport)'
            });
var format_NovagorenjskaprogaV2015_48 = new ol.format.GeoJSON();
var features_NovagorenjskaprogaV2015_48 = format_NovagorenjskaprogaV2015_48.readFeatures(json_NovagorenjskaprogaV2015_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NovagorenjskaprogaV2015_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NovagorenjskaprogaV2015_48.addFeatures(features_NovagorenjskaprogaV2015_48);
var lyr_NovagorenjskaprogaV2015_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NovagorenjskaprogaV2015_48, 
                style: style_NovagorenjskaprogaV2015_48,
                interactive: false,
                title: '<img src="styles/legend/NovagorenjskaprogaV2015_48.png" /> Nova gorenjska proga (ŠV 2015)'
            });
var format_KoridorskeS2_49 = new ol.format.GeoJSON();
var features_KoridorskeS2_49 = format_KoridorskeS2_49.readFeatures(json_KoridorskeS2_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KoridorskeS2_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KoridorskeS2_49.addFeatures(features_KoridorskeS2_49);
var lyr_KoridorskeS2_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KoridorskeS2_49, 
                style: style_KoridorskeS2_49,
                interactive: false,
                title: '<img src="styles/legend/KoridorskeS2_49.png" /> Koridorske S2'
            });
var group_Vizija2050 = new ol.layer.Group({
                                layers: [lyr_GrobelnoPragersko_35,lyr_ZagorjeCelje_36,lyr_KresniceZagorje_37,lyr_MariborZagreb_38,lyr_DivaaTrst_39,lyr_BeltinciLendava_40,lyr_LjubljanaDivaa_41,lyr_empeterPragersko_42,lyr_Celjepostaja_43,lyr_LevecCelje_44,lyr_LjubljanaCelje_45,lyr_Zagorjeempeter_46,],
                                title: "Vizija 2050+"});
var group_AdriaA = new ol.layer.Group({
                                layers: [lyr_DivaaTri_34,],
                                title: "Adria-A"});
var group_VZP = new ol.layer.Group({
                                layers: [lyr_NakazanasmerZidaniMostDobova_30,lyr_NavezavaZasavjeCelje_31,lyr_LjubljanaZidaniMost_32,lyr_LjubljanaDivaa_33,],
                                title: "VZP"});
var group_RegioLURR2 = new ol.layer.Group({
                                layers: [lyr_Dolenjskaproga_25,lyr_DomaleKranjZlatoPolje_26,lyr_MosteDomale_27,lyr_Zahodnaobvoznaproga_28,lyr_Kamnikaproga_29,],
                                title: "Regio-LUR R2"});
var group_PIkrajanjepotovalnihasov = new ol.layer.Group({
                                layers: [lyr_LJDI_23,lyr_LJMB_24,],
                                title: "PI krajšanje potovalnih časov "});
var group_LV = new ol.layer.Group({
                                layers: [lyr_PredorZalogBrezovica_19,lyr_Optimiziranipredori_20,lyr_Vzhodnojunaobvoznica_21,lyr_Severnozahodnaobvoznica_22,],
                                title: "LŽV"});
var group_Obstojeeomreje = new ol.layer.Group({
                                layers: [lyr_CesteACinHC_14,lyr_Obstojeeproge_15,lyr_Obstojeepostaje_16,lyr_DivaaKoper2tir_17,lyr_MariborMurskaSobota_18,],
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

lyr_OpenStreetMap_0.setVisible(true);lyr_Esritopo_1.setVisible(true);lyr_Esrisatelit_2.setVisible(true);lyr_Carto_light_nolabels_3.setVisible(true);lyr_Drave_4.setVisible(true);lyr_IT_5.setVisible(false);lyr_AT_6.setVisible(false);lyr_HU_7.setVisible(false);lyr_HR_8.setVisible(false);lyr_Slovenija_9.setVisible(false);lyr_Kulturna_dediscina_10.setVisible(false);lyr_Natura_2000_11.setVisible(false);lyr_VVO_dravni_nivo_12.setVisible(false);lyr_VVO_obcinski_nivo_13.setVisible(false);lyr_CesteACinHC_14.setVisible(true);lyr_Obstojeeproge_15.setVisible(true);lyr_Obstojeepostaje_16.setVisible(true);lyr_DivaaKoper2tir_17.setVisible(true);lyr_MariborMurskaSobota_18.setVisible(true);lyr_PredorZalogBrezovica_19.setVisible(true);lyr_Optimiziranipredori_20.setVisible(true);lyr_Vzhodnojunaobvoznica_21.setVisible(true);lyr_Severnozahodnaobvoznica_22.setVisible(true);lyr_LJDI_23.setVisible(true);lyr_LJMB_24.setVisible(true);lyr_Dolenjskaproga_25.setVisible(true);lyr_DomaleKranjZlatoPolje_26.setVisible(true);lyr_MosteDomale_27.setVisible(true);lyr_Zahodnaobvoznaproga_28.setVisible(true);lyr_Kamnikaproga_29.setVisible(true);lyr_NakazanasmerZidaniMostDobova_30.setVisible(true);lyr_NavezavaZasavjeCelje_31.setVisible(true);lyr_LjubljanaZidaniMost_32.setVisible(true);lyr_LjubljanaDivaa_33.setVisible(true);lyr_DivaaTri_34.setVisible(true);lyr_GrobelnoPragersko_35.setVisible(true);lyr_ZagorjeCelje_36.setVisible(true);lyr_KresniceZagorje_37.setVisible(true);lyr_MariborZagreb_38.setVisible(true);lyr_DivaaTrst_39.setVisible(true);lyr_BeltinciLendava_40.setVisible(true);lyr_LjubljanaDivaa_41.setVisible(true);lyr_empeterPragersko_42.setVisible(true);lyr_Celjepostaja_43.setVisible(true);lyr_LevecCelje_44.setVisible(true);lyr_LjubljanaCelje_45.setVisible(true);lyr_Zagorjeempeter_46.setVisible(true);lyr_NavezavaBrnikFraport_47.setVisible(true);lyr_NovagorenjskaprogaV2015_48.setVisible(true);lyr_KoridorskeS2_49.setVisible(true);
var layersList = [group_Podloge,group_Zalednikoridorjihitrihprog,group_Okoljeinprostor,group_Obstojeeomreje,group_LV,group_PIkrajanjepotovalnihasov,group_RegioLURR2,group_VZP,group_AdriaA,group_Vizija2050,lyr_NavezavaBrnikFraport_47,lyr_NovagorenjskaprogaV2015_48,lyr_KoridorskeS2_49];
lyr_Drave_4.set('fieldAliases', {'FID_3': 'FID_3', 'NUTS_3': 'NUTS_3', 'NAME_NUTS3': 'NAME_NUTS3', 'FID_2': 'FID_2', 'NUTS_2': 'NUTS_2', 'NAME_NUTS2': 'NAME_NUTS2', 'FID_1': 'FID_1', 'NUTS_1': 'NUTS_1', 'NAME_NUTS1': 'NAME_NUTS1', 'FID_0': 'FID_0', 'NUTS_0': 'NUTS_0', 'NAME_NUTS0': 'NAME_NUTS0', 'orig_pov': 'orig_pov', });
lyr_Slovenija_9.set('fieldAliases', {'UE_MID': 'UE_MID', 'UE_ID': 'UE_ID', 'UE_IME': 'UE_IME', 'D_OD': 'D_OD', 'POVRSINA': 'POVRSINA', 'Y_C': 'Y_C', 'X_C': 'X_C', 'UE_STDM': 'UE_STDM', });
lyr_Kulturna_dediscina_10.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_Natura_2000_11.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', });
lyr_VVO_dravni_nivo_12.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_VVO_obcinski_nivo_13.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_CesteACinHC_14.set('fieldAliases', {'NO': 'NO', 'R_NO': 'R_NO', });
lyr_Obstojeeproge_15.set('fieldAliases', {'qc_id': 'qc_id', 'sž_ime_p~': 'sž_ime_p~', 'sž_kateg~': 'sž_kateg~', 'sž_števi': 'sž_števi', });
lyr_Obstojeepostaje_16.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'name': 'name', });
lyr_DivaaKoper2tir_17.set('fieldAliases', {'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_MariborMurskaSobota_18.set('fieldAliases', {'qc_id': 'qc_id', 'tip odseka': 'tip odseka', 'length': 'length', });
lyr_PredorZalogBrezovica_19.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Optimiziranipredori_20.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Vzhodnojunaobvoznica_21.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Severnozahodnaobvoznica_22.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LJDI_23.set('fieldAliases', {'id': 'id', });
lyr_LJMB_24.set('fieldAliases', {'id': 'id', });
lyr_Dolenjskaproga_25.set('fieldAliases', {'id': 'id', });
lyr_DomaleKranjZlatoPolje_26.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_MosteDomale_27.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'r_no': 'r_no', });
lyr_Zahodnaobvoznaproga_28.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_Kamnikaproga_29.set('fieldAliases', {'id': 'id', });
lyr_NakazanasmerZidaniMostDobova_30.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_NavezavaZasavjeCelje_31.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_LjubljanaZidaniMost_32.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_LjubljanaDivaa_33.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_DivaaTri_34.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_GrobelnoPragersko_35.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_ZagorjeCelje_36.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_KresniceZagorje_37.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_MariborZagreb_38.set('fieldAliases', {'descriptio': 'descriptio', 'Length': 'Length', });
lyr_DivaaTrst_39.set('fieldAliases', {'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_BeltinciLendava_40.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LjubljanaDivaa_41.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_empeterPragersko_42.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Celjepostaja_43.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LevecCelje_44.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LjubljanaCelje_45.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Zagorjeempeter_46.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_NavezavaBrnikFraport_47.set('fieldAliases', {'FID': 'FID', });
lyr_NovagorenjskaprogaV2015_48.set('fieldAliases', {'NO': 'NO', });
lyr_KoridorskeS2_49.set('fieldAliases', {'NO': 'NO', 'R_NO': 'R_NO', });
lyr_Drave_4.set('fieldImages', {'FID_3': 'Range', 'NUTS_3': 'TextEdit', 'NAME_NUTS3': 'TextEdit', 'FID_2': 'Range', 'NUTS_2': 'TextEdit', 'NAME_NUTS2': 'TextEdit', 'FID_1': 'Range', 'NUTS_1': 'TextEdit', 'NAME_NUTS1': 'TextEdit', 'FID_0': 'TextEdit', 'NUTS_0': 'TextEdit', 'NAME_NUTS0': 'TextEdit', 'orig_pov': 'TextEdit', });
lyr_Slovenija_9.set('fieldImages', {'UE_MID': '', 'UE_ID': '', 'UE_IME': '', 'D_OD': '', 'POVRSINA': '', 'Y_C': '', 'X_C': '', 'UE_STDM': '', });
lyr_Kulturna_dediscina_10.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_Natura_2000_11.set('fieldImages', {'qc_id': 'TextEdit', 'objectid': 'TextEdit', });
lyr_VVO_dravni_nivo_12.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_VVO_obcinski_nivo_13.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_CesteACinHC_14.set('fieldImages', {'NO': 'TextEdit', 'R_NO': 'TextEdit', });
lyr_Obstojeeproge_15.set('fieldImages', {'qc_id': 'TextEdit', 'sž_ime_p~': 'TextEdit', 'sž_kateg~': 'TextEdit', 'sž_števi': 'TextEdit', });
lyr_Obstojeepostaje_16.set('fieldImages', {'qc_id': 'TextEdit', 'no': 'TextEdit', 'name': 'TextEdit', });
lyr_DivaaKoper2tir_17.set('fieldImages', {'Tipodseka': 'TextEdit', 'Length': 'TextEdit', });
lyr_MariborMurskaSobota_18.set('fieldImages', {'qc_id': '', 'tip odseka': '', 'length': '', });
lyr_PredorZalogBrezovica_19.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Optimiziranipredori_20.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Vzhodnojunaobvoznica_21.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'Range', });
lyr_Severnozahodnaobvoznica_22.set('fieldImages', {'tipodseka': '', 'length': 'TextEdit', });
lyr_LJDI_23.set('fieldImages', {'id': 'TextEdit', });
lyr_LJMB_24.set('fieldImages', {'id': 'TextEdit', });
lyr_Dolenjskaproga_25.set('fieldImages', {'id': '', });
lyr_DomaleKranjZlatoPolje_26.set('fieldImages', {'qc_id': '', });
lyr_MosteDomale_27.set('fieldImages', {'qc_id': '', 'no': '', 'r_no': '', });
lyr_Zahodnaobvoznaproga_28.set('fieldImages', {'qc_id': '', });
lyr_Kamnikaproga_29.set('fieldImages', {'id': '', });
lyr_NakazanasmerZidaniMostDobova_30.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_NavezavaZasavjeCelje_31.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_LjubljanaZidaniMost_32.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr_LjubljanaDivaa_33.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_DivaaTri_34.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_GrobelnoPragersko_35.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_ZagorjeCelje_36.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_KresniceZagorje_37.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_MariborZagreb_38.set('fieldImages', {'descriptio': '', 'Length': '', });
lyr_DivaaTrst_39.set('fieldImages', {'Tipodseka': '', 'Length': '', });
lyr_BeltinciLendava_40.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_LjubljanaDivaa_41.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_empeterPragersko_42.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Celjepostaja_43.set('fieldImages', {'qc_id_0': '', 'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_LevecCelje_44.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_LjubljanaCelje_45.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Zagorjeempeter_46.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_NavezavaBrnikFraport_47.set('fieldImages', {'FID': '', });
lyr_NovagorenjskaprogaV2015_48.set('fieldImages', {'NO': '', });
lyr_KoridorskeS2_49.set('fieldImages', {'NO': '', 'R_NO': '', });
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
lyr_MariborMurskaSobota_18.set('fieldLabels', {});
lyr_PredorZalogBrezovica_19.set('fieldLabels', {});
lyr_Optimiziranipredori_20.set('fieldLabels', {});
lyr_Vzhodnojunaobvoznica_21.set('fieldLabels', {});
lyr_Severnozahodnaobvoznica_22.set('fieldLabels', {});
lyr_LJDI_23.set('fieldLabels', {});
lyr_LJMB_24.set('fieldLabels', {});
lyr_Dolenjskaproga_25.set('fieldLabels', {});
lyr_DomaleKranjZlatoPolje_26.set('fieldLabels', {});
lyr_MosteDomale_27.set('fieldLabels', {});
lyr_Zahodnaobvoznaproga_28.set('fieldLabels', {});
lyr_Kamnikaproga_29.set('fieldLabels', {});
lyr_NakazanasmerZidaniMostDobova_30.set('fieldLabels', {});
lyr_NavezavaZasavjeCelje_31.set('fieldLabels', {});
lyr_LjubljanaZidaniMost_32.set('fieldLabels', {});
lyr_LjubljanaDivaa_33.set('fieldLabels', {});
lyr_DivaaTri_34.set('fieldLabels', {});
lyr_GrobelnoPragersko_35.set('fieldLabels', {});
lyr_ZagorjeCelje_36.set('fieldLabels', {});
lyr_KresniceZagorje_37.set('fieldLabels', {});
lyr_MariborZagreb_38.set('fieldLabels', {});
lyr_DivaaTrst_39.set('fieldLabels', {});
lyr_BeltinciLendava_40.set('fieldLabels', {});
lyr_LjubljanaDivaa_41.set('fieldLabels', {});
lyr_empeterPragersko_42.set('fieldLabels', {});
lyr_Celjepostaja_43.set('fieldLabels', {});
lyr_LevecCelje_44.set('fieldLabels', {});
lyr_LjubljanaCelje_45.set('fieldLabels', {});
lyr_Zagorjeempeter_46.set('fieldLabels', {});
lyr_NavezavaBrnikFraport_47.set('fieldLabels', {'FID': 'no label', });
lyr_NovagorenjskaprogaV2015_48.set('fieldLabels', {'NO': 'no label', });
lyr_KoridorskeS2_49.set('fieldLabels', {'NO': 'no label', 'R_NO': 'no label', });
lyr_KoridorskeS2_49.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});