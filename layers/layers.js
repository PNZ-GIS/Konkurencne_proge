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
var format_DivaaTri_18 = new ol.format.GeoJSON();
var features_DivaaTri_18 = format_DivaaTri_18.readFeatures(json_DivaaTri_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivaaTri_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivaaTri_18.addFeatures(features_DivaaTri_18);
var lyr_DivaaTri_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivaaTri_18, 
                style: style_DivaaTri_18,
                interactive: false,
                title: '<img src="styles/legend/DivaaTri_18.png" /> Divača-Tržič '
            });
var format_LjubljanaDivaa_19 = new ol.format.GeoJSON();
var features_LjubljanaDivaa_19 = format_LjubljanaDivaa_19.readFeatures(json_LjubljanaDivaa_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaDivaa_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaDivaa_19.addFeatures(features_LjubljanaDivaa_19);
var lyr_LjubljanaDivaa_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaDivaa_19, 
                style: style_LjubljanaDivaa_19,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaDivaa_19.png" /> Ljubljana-Divača '
            });
var format_MariborMurskaSobota_20 = new ol.format.GeoJSON();
var features_MariborMurskaSobota_20 = format_MariborMurskaSobota_20.readFeatures(json_MariborMurskaSobota_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MariborMurskaSobota_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MariborMurskaSobota_20.addFeatures(features_MariborMurskaSobota_20);
var lyr_MariborMurskaSobota_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MariborMurskaSobota_20, 
                style: style_MariborMurskaSobota_20,
                interactive: false,
                title: '<img src="styles/legend/MariborMurskaSobota_20.png" /> Maribor-Murska Sobota '
            });
var format_NovagorenjskaprogaV2015_21 = new ol.format.GeoJSON();
var features_NovagorenjskaprogaV2015_21 = format_NovagorenjskaprogaV2015_21.readFeatures(json_NovagorenjskaprogaV2015_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NovagorenjskaprogaV2015_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NovagorenjskaprogaV2015_21.addFeatures(features_NovagorenjskaprogaV2015_21);
var lyr_NovagorenjskaprogaV2015_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NovagorenjskaprogaV2015_21, 
                style: style_NovagorenjskaprogaV2015_21,
                interactive: false,
                title: '<img src="styles/legend/NovagorenjskaprogaV2015_21.png" /> Nova gorenjska proga (ŠV 2015)'
            });
var format_LjubljanaZidaniMost_22 = new ol.format.GeoJSON();
var features_LjubljanaZidaniMost_22 = format_LjubljanaZidaniMost_22.readFeatures(json_LjubljanaZidaniMost_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaZidaniMost_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaZidaniMost_22.addFeatures(features_LjubljanaZidaniMost_22);
var lyr_LjubljanaZidaniMost_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaZidaniMost_22, 
                style: style_LjubljanaZidaniMost_22,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaZidaniMost_22.png" /> Ljubljana-Zidani Most'
            });
var format_LjubljanaCelje_23 = new ol.format.GeoJSON();
var features_LjubljanaCelje_23 = format_LjubljanaCelje_23.readFeatures(json_LjubljanaCelje_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaCelje_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaCelje_23.addFeatures(features_LjubljanaCelje_23);
var lyr_LjubljanaCelje_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaCelje_23, 
                style: style_LjubljanaCelje_23,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaCelje_23.png" /> Ljubljana-Celje'
            });
var format_empeterPragersko_24 = new ol.format.GeoJSON();
var features_empeterPragersko_24 = format_empeterPragersko_24.readFeatures(json_empeterPragersko_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_empeterPragersko_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_empeterPragersko_24.addFeatures(features_empeterPragersko_24);
var lyr_empeterPragersko_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_empeterPragersko_24, 
                style: style_empeterPragersko_24,
                interactive: false,
                title: '<img src="styles/legend/empeterPragersko_24.png" /> Šempeter-Pragersko '
            });
var format_Celjepostaja_25 = new ol.format.GeoJSON();
var features_Celjepostaja_25 = format_Celjepostaja_25.readFeatures(json_Celjepostaja_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Celjepostaja_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Celjepostaja_25.addFeatures(features_Celjepostaja_25);
var lyr_Celjepostaja_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Celjepostaja_25, 
                style: style_Celjepostaja_25,
                interactive: false,
                title: '<img src="styles/legend/Celjepostaja_25.png" /> Celje postaja '
            });
var format_LevecCelje_26 = new ol.format.GeoJSON();
var features_LevecCelje_26 = format_LevecCelje_26.readFeatures(json_LevecCelje_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LevecCelje_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LevecCelje_26.addFeatures(features_LevecCelje_26);
var lyr_LevecCelje_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LevecCelje_26, 
                style: style_LevecCelje_26,
                interactive: false,
                title: '<img src="styles/legend/LevecCelje_26.png" /> Levec-Celje '
            });
var format_ZagorjeCelje_27 = new ol.format.GeoJSON();
var features_ZagorjeCelje_27 = format_ZagorjeCelje_27.readFeatures(json_ZagorjeCelje_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZagorjeCelje_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZagorjeCelje_27.addFeatures(features_ZagorjeCelje_27);
var lyr_ZagorjeCelje_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZagorjeCelje_27, 
                style: style_ZagorjeCelje_27,
                interactive: false,
                title: '<img src="styles/legend/ZagorjeCelje_27.png" /> Zagorje-Celje'
            });
var format_GrobelnoPragersko_28 = new ol.format.GeoJSON();
var features_GrobelnoPragersko_28 = format_GrobelnoPragersko_28.readFeatures(json_GrobelnoPragersko_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrobelnoPragersko_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrobelnoPragersko_28.addFeatures(features_GrobelnoPragersko_28);
var lyr_GrobelnoPragersko_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GrobelnoPragersko_28, 
                style: style_GrobelnoPragersko_28,
                interactive: false,
                title: '<img src="styles/legend/GrobelnoPragersko_28.png" /> Grobelno-Pragersko '
            });
var format_LjubljanaDivaa_29 = new ol.format.GeoJSON();
var features_LjubljanaDivaa_29 = format_LjubljanaDivaa_29.readFeatures(json_LjubljanaDivaa_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaDivaa_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaDivaa_29.addFeatures(features_LjubljanaDivaa_29);
var lyr_LjubljanaDivaa_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaDivaa_29, 
                style: style_LjubljanaDivaa_29,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaDivaa_29.png" /> Ljubljana-Divača'
            });
var format_KresniceZagorje_30 = new ol.format.GeoJSON();
var features_KresniceZagorje_30 = format_KresniceZagorje_30.readFeatures(json_KresniceZagorje_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KresniceZagorje_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KresniceZagorje_30.addFeatures(features_KresniceZagorje_30);
var lyr_KresniceZagorje_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KresniceZagorje_30, 
                style: style_KresniceZagorje_30,
                interactive: false,
                title: '<img src="styles/legend/KresniceZagorje_30.png" /> Kresnice-Zagorje'
            });
var format_Dolenjskaproga_31 = new ol.format.GeoJSON();
var features_Dolenjskaproga_31 = format_Dolenjskaproga_31.readFeatures(json_Dolenjskaproga_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dolenjskaproga_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dolenjskaproga_31.addFeatures(features_Dolenjskaproga_31);
var lyr_Dolenjskaproga_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dolenjskaproga_31, 
                style: style_Dolenjskaproga_31,
                interactive: false,
                title: '<img src="styles/legend/Dolenjskaproga_31.png" /> Dolenjska proga'
            });
var format_DomaleKranjZlatoPolje_32 = new ol.format.GeoJSON();
var features_DomaleKranjZlatoPolje_32 = format_DomaleKranjZlatoPolje_32.readFeatures(json_DomaleKranjZlatoPolje_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DomaleKranjZlatoPolje_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DomaleKranjZlatoPolje_32.addFeatures(features_DomaleKranjZlatoPolje_32);
var lyr_DomaleKranjZlatoPolje_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DomaleKranjZlatoPolje_32, 
                style: style_DomaleKranjZlatoPolje_32,
                interactive: false,
                title: '<img src="styles/legend/DomaleKranjZlatoPolje_32.png" /> Domžale-Kranj Zlato Polje'
            });
var format_MosteDomale_33 = new ol.format.GeoJSON();
var features_MosteDomale_33 = format_MosteDomale_33.readFeatures(json_MosteDomale_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MosteDomale_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MosteDomale_33.addFeatures(features_MosteDomale_33);
var lyr_MosteDomale_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MosteDomale_33, 
                style: style_MosteDomale_33,
                interactive: false,
                title: '<img src="styles/legend/MosteDomale_33.png" /> Moste-Domžale'
            });
var format_Zahodnaobvoznaproga_34 = new ol.format.GeoJSON();
var features_Zahodnaobvoznaproga_34 = format_Zahodnaobvoznaproga_34.readFeatures(json_Zahodnaobvoznaproga_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zahodnaobvoznaproga_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zahodnaobvoznaproga_34.addFeatures(features_Zahodnaobvoznaproga_34);
var lyr_Zahodnaobvoznaproga_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zahodnaobvoznaproga_34, 
                style: style_Zahodnaobvoznaproga_34,
                interactive: false,
                title: '<img src="styles/legend/Zahodnaobvoznaproga_34.png" /> Zahodna obvozna proga'
            });
var format_Kamnikaproga_35 = new ol.format.GeoJSON();
var features_Kamnikaproga_35 = format_Kamnikaproga_35.readFeatures(json_Kamnikaproga_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kamnikaproga_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kamnikaproga_35.addFeatures(features_Kamnikaproga_35);
var lyr_Kamnikaproga_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kamnikaproga_35, 
                style: style_Kamnikaproga_35,
                interactive: false,
                title: '<img src="styles/legend/Kamnikaproga_35.png" /> Kamniška proga'
            });
var format_Dolenjskaproga_36 = new ol.format.GeoJSON();
var features_Dolenjskaproga_36 = format_Dolenjskaproga_36.readFeatures(json_Dolenjskaproga_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dolenjskaproga_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dolenjskaproga_36.addFeatures(features_Dolenjskaproga_36);
var lyr_Dolenjskaproga_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dolenjskaproga_36, 
                style: style_Dolenjskaproga_36,
                interactive: false,
                title: '<img src="styles/legend/Dolenjskaproga_36.png" /> Dolenjska proga'
            });
var format_DomaleKranjZlatoPolje_37 = new ol.format.GeoJSON();
var features_DomaleKranjZlatoPolje_37 = format_DomaleKranjZlatoPolje_37.readFeatures(json_DomaleKranjZlatoPolje_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DomaleKranjZlatoPolje_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DomaleKranjZlatoPolje_37.addFeatures(features_DomaleKranjZlatoPolje_37);
var lyr_DomaleKranjZlatoPolje_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DomaleKranjZlatoPolje_37, 
                style: style_DomaleKranjZlatoPolje_37,
                interactive: false,
                title: '<img src="styles/legend/DomaleKranjZlatoPolje_37.png" /> Domžale-Kranj Zlato Polje'
            });
var format_MosteDomale_38 = new ol.format.GeoJSON();
var features_MosteDomale_38 = format_MosteDomale_38.readFeatures(json_MosteDomale_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MosteDomale_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MosteDomale_38.addFeatures(features_MosteDomale_38);
var lyr_MosteDomale_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MosteDomale_38, 
                style: style_MosteDomale_38,
                interactive: false,
                title: '<img src="styles/legend/MosteDomale_38.png" /> Moste-Domžale'
            });
var format_Zahodnaobvoznaproga_39 = new ol.format.GeoJSON();
var features_Zahodnaobvoznaproga_39 = format_Zahodnaobvoznaproga_39.readFeatures(json_Zahodnaobvoznaproga_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zahodnaobvoznaproga_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zahodnaobvoznaproga_39.addFeatures(features_Zahodnaobvoznaproga_39);
var lyr_Zahodnaobvoznaproga_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zahodnaobvoznaproga_39, 
                style: style_Zahodnaobvoznaproga_39,
                interactive: false,
                title: '<img src="styles/legend/Zahodnaobvoznaproga_39.png" /> Zahodna obvozna proga'
            });
var format_Kamnikaproga_40 = new ol.format.GeoJSON();
var features_Kamnikaproga_40 = format_Kamnikaproga_40.readFeatures(json_Kamnikaproga_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kamnikaproga_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kamnikaproga_40.addFeatures(features_Kamnikaproga_40);
var lyr_Kamnikaproga_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kamnikaproga_40, 
                style: style_Kamnikaproga_40,
                interactive: false,
                title: '<img src="styles/legend/Kamnikaproga_40.png" /> Kamniška proga'
            });
var format_KoridorskeS2_41 = new ol.format.GeoJSON();
var features_KoridorskeS2_41 = format_KoridorskeS2_41.readFeatures(json_KoridorskeS2_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KoridorskeS2_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KoridorskeS2_41.addFeatures(features_KoridorskeS2_41);
var lyr_KoridorskeS2_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KoridorskeS2_41, 
                style: style_KoridorskeS2_41,
                interactive: false,
                title: '<img src="styles/legend/KoridorskeS2_41.png" /> Koridorske S2'
            });
var group_ScenarijK1 = new ol.layer.Group({
                                layers: [lyr_Dolenjskaproga_36,lyr_DomaleKranjZlatoPolje_37,lyr_MosteDomale_38,lyr_Zahodnaobvoznaproga_39,lyr_Kamnikaproga_40,lyr_KoridorskeS2_41,],
                                title: "Scenarij K1"});
var group_RegioLURR2 = new ol.layer.Group({
                                layers: [lyr_Dolenjskaproga_36,lyr_DomaleKranjZlatoPolje_37,lyr_MosteDomale_38,lyr_Zahodnaobvoznaproga_39,lyr_Kamnikaproga_40,],
                                title: "Regio-LUR R2"});
var group_ScenarijK2 = new ol.layer.Group({
                                layers: [lyr_ZagorjeCelje_27,lyr_GrobelnoPragersko_28,lyr_LjubljanaDivaa_29,lyr_KresniceZagorje_30,],
                                title: "Scenarij K2"});
var group_ScenarijK3 = new ol.layer.Group({
                                layers: [lyr_DivaaTri_18,lyr_LjubljanaDivaa_19,lyr_MariborMurskaSobota_20,lyr_NovagorenjskaprogaV2015_21,lyr_LjubljanaZidaniMost_22,lyr_LjubljanaCelje_23,lyr_empeterPragersko_24,lyr_Celjepostaja_25,lyr_LevecCelje_26,],
                                title: "Scenarij K3"});
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

lyr_OpenStreetMap_0.setVisible(true);lyr_Esritopo_1.setVisible(true);lyr_Esrisatelit_2.setVisible(true);lyr_Carto_light_nolabels_3.setVisible(true);lyr_Drave_4.setVisible(true);lyr_IT_5.setVisible(false);lyr_AT_6.setVisible(false);lyr_HU_7.setVisible(false);lyr_HR_8.setVisible(false);lyr_Slovenija_9.setVisible(false);lyr_Kulturna_dediscina_10.setVisible(false);lyr_Natura_2000_11.setVisible(false);lyr_VVO_dravni_nivo_12.setVisible(false);lyr_VVO_obcinski_nivo_13.setVisible(false);lyr_CesteACinHC_14.setVisible(true);lyr_Obstojeeproge_15.setVisible(true);lyr_Obstojeepostaje_16.setVisible(true);lyr_DivaaKoper2tir_17.setVisible(true);lyr_DivaaTri_18.setVisible(true);lyr_LjubljanaDivaa_19.setVisible(true);lyr_MariborMurskaSobota_20.setVisible(true);lyr_NovagorenjskaprogaV2015_21.setVisible(true);lyr_LjubljanaZidaniMost_22.setVisible(true);lyr_LjubljanaCelje_23.setVisible(true);lyr_empeterPragersko_24.setVisible(true);lyr_Celjepostaja_25.setVisible(true);lyr_LevecCelje_26.setVisible(true);lyr_ZagorjeCelje_27.setVisible(true);lyr_GrobelnoPragersko_28.setVisible(true);lyr_LjubljanaDivaa_29.setVisible(true);lyr_KresniceZagorje_30.setVisible(true);lyr_Dolenjskaproga_31.setVisible(true);lyr_DomaleKranjZlatoPolje_32.setVisible(true);lyr_MosteDomale_33.setVisible(true);lyr_Zahodnaobvoznaproga_34.setVisible(true);lyr_Kamnikaproga_35.setVisible(true);lyr_Dolenjskaproga_36.setVisible(true);lyr_DomaleKranjZlatoPolje_37.setVisible(true);lyr_MosteDomale_38.setVisible(true);lyr_Zahodnaobvoznaproga_39.setVisible(true);lyr_Kamnikaproga_40.setVisible(true);lyr_KoridorskeS2_41.setVisible(true);
var layersList = [group_Podloge,group_Zalednikoridorjihitrihprog,group_Okoljeinprostor,group_Obstojeeomreje,group_ScenarijK3,group_ScenarijK2,group_RegioLURR2,group_ScenarijK1];
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
lyr_DivaaTri_18.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LjubljanaDivaa_19.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_MariborMurskaSobota_20.set('fieldAliases', {'qc_id': 'qc_id', 'tip odseka': 'tip odseka', 'length': 'length', });
lyr_NovagorenjskaprogaV2015_21.set('fieldAliases', {'NO': 'NO', });
lyr_LjubljanaZidaniMost_22.set('fieldAliases', {'NO': 'NO', 'FROMNODENO': 'FROMNODENO', 'TONODENO': 'TONODENO', 'LENGTH': 'LENGTH', 'R_NO': 'R_NO', 'R_FROMNO~1': 'R_FROMNO~1', 'R_TONODENO': 'R_TONODENO', 'R_LENGTH': 'R_LENGTH', });
lyr_LjubljanaCelje_23.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_empeterPragersko_24.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Celjepostaja_25.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LevecCelje_26.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_ZagorjeCelje_27.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_GrobelnoPragersko_28.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LjubljanaDivaa_29.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_KresniceZagorje_30.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Dolenjskaproga_31.set('fieldAliases', {'id': 'id', });
lyr_DomaleKranjZlatoPolje_32.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_MosteDomale_33.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'r_no': 'r_no', });
lyr_Zahodnaobvoznaproga_34.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_Kamnikaproga_35.set('fieldAliases', {'id': 'id', });
lyr_Dolenjskaproga_36.set('fieldAliases', {'id': 'id', });
lyr_DomaleKranjZlatoPolje_37.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_MosteDomale_38.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'r_no': 'r_no', });
lyr_Zahodnaobvoznaproga_39.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_Kamnikaproga_40.set('fieldAliases', {'id': 'id', });
lyr_KoridorskeS2_41.set('fieldAliases', {'NO': 'NO', 'R_NO': 'R_NO', });
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
lyr_DivaaTri_18.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_LjubljanaDivaa_19.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_MariborMurskaSobota_20.set('fieldImages', {'qc_id': '', 'tip odseka': '', 'length': '', });
lyr_NovagorenjskaprogaV2015_21.set('fieldImages', {'NO': '', });
lyr_LjubljanaZidaniMost_22.set('fieldImages', {'NO': 'Range', 'FROMNODENO': 'Range', 'TONODENO': 'Range', 'LENGTH': 'TextEdit', 'R_NO': 'Range', 'R_FROMNO~1': 'Range', 'R_TONODENO': 'Range', 'R_LENGTH': 'TextEdit', });
lyr_LjubljanaCelje_23.set('fieldImages', {'tipodseka': '', 'length': '', });
lyr_empeterPragersko_24.set('fieldImages', {'tipodseka': '', 'length': '', });
lyr_Celjepostaja_25.set('fieldImages', {'qc_id_0': '', 'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_LevecCelje_26.set('fieldImages', {'tipodseka': '', 'length': '', });
lyr_ZagorjeCelje_27.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_GrobelnoPragersko_28.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_LjubljanaDivaa_29.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_KresniceZagorje_30.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Dolenjskaproga_31.set('fieldImages', {'id': '', });
lyr_DomaleKranjZlatoPolje_32.set('fieldImages', {'qc_id': '', });
lyr_MosteDomale_33.set('fieldImages', {'qc_id': '', 'no': '', 'r_no': '', });
lyr_Zahodnaobvoznaproga_34.set('fieldImages', {'qc_id': '', });
lyr_Kamnikaproga_35.set('fieldImages', {'id': '', });
lyr_Dolenjskaproga_36.set('fieldImages', {'id': '', });
lyr_DomaleKranjZlatoPolje_37.set('fieldImages', {'qc_id': '', });
lyr_MosteDomale_38.set('fieldImages', {'qc_id': '', 'no': '', 'r_no': '', });
lyr_Zahodnaobvoznaproga_39.set('fieldImages', {'qc_id': '', });
lyr_Kamnikaproga_40.set('fieldImages', {'id': '', });
lyr_KoridorskeS2_41.set('fieldImages', {'NO': '', 'R_NO': '', });
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
lyr_DivaaTri_18.set('fieldLabels', {});
lyr_LjubljanaDivaa_19.set('fieldLabels', {});
lyr_MariborMurskaSobota_20.set('fieldLabels', {});
lyr_NovagorenjskaprogaV2015_21.set('fieldLabels', {});
lyr_LjubljanaZidaniMost_22.set('fieldLabels', {});
lyr_LjubljanaCelje_23.set('fieldLabels', {});
lyr_empeterPragersko_24.set('fieldLabels', {});
lyr_Celjepostaja_25.set('fieldLabels', {});
lyr_LevecCelje_26.set('fieldLabels', {});
lyr_ZagorjeCelje_27.set('fieldLabels', {});
lyr_GrobelnoPragersko_28.set('fieldLabels', {});
lyr_LjubljanaDivaa_29.set('fieldLabels', {});
lyr_KresniceZagorje_30.set('fieldLabels', {});
lyr_Dolenjskaproga_31.set('fieldLabels', {});
lyr_DomaleKranjZlatoPolje_32.set('fieldLabels', {});
lyr_MosteDomale_33.set('fieldLabels', {});
lyr_Zahodnaobvoznaproga_34.set('fieldLabels', {});
lyr_Kamnikaproga_35.set('fieldLabels', {});
lyr_Dolenjskaproga_36.set('fieldLabels', {});
lyr_DomaleKranjZlatoPolje_37.set('fieldLabels', {});
lyr_MosteDomale_38.set('fieldLabels', {});
lyr_Zahodnaobvoznaproga_39.set('fieldLabels', {});
lyr_Kamnikaproga_40.set('fieldLabels', {});
lyr_KoridorskeS2_41.set('fieldLabels', {});
lyr_KoridorskeS2_41.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});