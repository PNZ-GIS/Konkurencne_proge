var wms_layers = [];

var format_PredorZalogBrezovica_0 = new ol.format.GeoJSON();
var features_PredorZalogBrezovica_0 = format_PredorZalogBrezovica_0.readFeatures(json_PredorZalogBrezovica_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PredorZalogBrezovica_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PredorZalogBrezovica_0.addFeatures(features_PredorZalogBrezovica_0);
var lyr_PredorZalogBrezovica_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PredorZalogBrezovica_0, 
                style: style_PredorZalogBrezovica_0,
                interactive: false,
                title: '<img src="styles/legend/PredorZalogBrezovica_0.png" /> Predor Zalog - Brezovica'
            });
var format_Optimiziranipredori_1 = new ol.format.GeoJSON();
var features_Optimiziranipredori_1 = format_Optimiziranipredori_1.readFeatures(json_Optimiziranipredori_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Optimiziranipredori_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Optimiziranipredori_1.addFeatures(features_Optimiziranipredori_1);
var lyr_Optimiziranipredori_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Optimiziranipredori_1, 
                style: style_Optimiziranipredori_1,
                interactive: false,
                title: '<img src="styles/legend/Optimiziranipredori_1.png" /> Optimizirani predori '
            });
var format_Vzhodnojunaobvoznica_2 = new ol.format.GeoJSON();
var features_Vzhodnojunaobvoznica_2 = format_Vzhodnojunaobvoznica_2.readFeatures(json_Vzhodnojunaobvoznica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vzhodnojunaobvoznica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vzhodnojunaobvoznica_2.addFeatures(features_Vzhodnojunaobvoznica_2);
var lyr_Vzhodnojunaobvoznica_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vzhodnojunaobvoznica_2, 
                style: style_Vzhodnojunaobvoznica_2,
                interactive: false,
                title: '<img src="styles/legend/Vzhodnojunaobvoznica_2.png" /> Vzhodno-južna obvoznica'
            });
var format_Severnozahodnaobvoznica_3 = new ol.format.GeoJSON();
var features_Severnozahodnaobvoznica_3 = format_Severnozahodnaobvoznica_3.readFeatures(json_Severnozahodnaobvoznica_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Severnozahodnaobvoznica_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Severnozahodnaobvoznica_3.addFeatures(features_Severnozahodnaobvoznica_3);
var lyr_Severnozahodnaobvoznica_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Severnozahodnaobvoznica_3, 
                style: style_Severnozahodnaobvoznica_3,
                interactive: false,
                title: '<img src="styles/legend/Severnozahodnaobvoznica_3.png" /> Severno-zahodna obvoznica'
            });

        var lyr_OpenStreetMap_4 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Esritopo_5 = new ol.layer.Tile({
            'title': 'Esri topo',
            'type': 'base',
            'opacity': 0.509000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Esrisatelit_6 = new ol.layer.Tile({
            'title': 'Esri satelit',
            'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Carto_light_nolabels_7 = new ol.layer.Tile({
            'title': 'Carto_light_nolabels',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_Drave_8 = new ol.format.GeoJSON();
var features_Drave_8 = format_Drave_8.readFeatures(json_Drave_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drave_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drave_8.addFeatures(features_Drave_8);
var lyr_Drave_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Drave_8, 
                style: style_Drave_8,
                interactive: false,
                title: '<img src="styles/legend/Drave_8.png" /> Države'
            });
var lyr_IT_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "IT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IT_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [611039.430757, 4236957.334643, 2119046.033771, 6020672.617064]
                            })
                        });
var lyr_AT_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "AT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AT_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1053465.072614, 5825030.176486, 1915869.769652, 6297069.407299]
                            })
                        });
var lyr_HU_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "HU",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HU_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1768068.497916, 5693212.506719, 2633995.267813, 6232933.986586]
                            })
                        });
var lyr_HR_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "HR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HR_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1569296.836371, 5562971.318802, 2165900.170118, 5880145.131947]
                            })
                        });
var format_Slovenija_13 = new ol.format.GeoJSON();
var features_Slovenija_13 = format_Slovenija_13.readFeatures(json_Slovenija_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Slovenija_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Slovenija_13.addFeatures(features_Slovenija_13);
var lyr_Slovenija_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Slovenija_13, 
                style: style_Slovenija_13,
                interactive: false,
                title: '<img src="styles/legend/Slovenija_13.png" /> Slovenija'
            });
var format_Obstojeeproge_14 = new ol.format.GeoJSON();
var features_Obstojeeproge_14 = format_Obstojeeproge_14.readFeatures(json_Obstojeeproge_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstojeeproge_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstojeeproge_14.addFeatures(features_Obstojeeproge_14);
var lyr_Obstojeeproge_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obstojeeproge_14, 
                style: style_Obstojeeproge_14,
                interactive: false,
                title: '<img src="styles/legend/Obstojeeproge_14.png" /> Obstoječe proge'
            });
var format_Obstojeepostaje_15 = new ol.format.GeoJSON();
var features_Obstojeepostaje_15 = format_Obstojeepostaje_15.readFeatures(json_Obstojeepostaje_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstojeepostaje_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstojeepostaje_15.addFeatures(features_Obstojeepostaje_15);
var lyr_Obstojeepostaje_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obstojeepostaje_15, 
                style: style_Obstojeepostaje_15,
                interactive: false,
                title: '<img src="styles/legend/Obstojeepostaje_15.png" /> Obstoječe postaje'
            });
var format_DivaaKoper_16 = new ol.format.GeoJSON();
var features_DivaaKoper_16 = format_DivaaKoper_16.readFeatures(json_DivaaKoper_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivaaKoper_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivaaKoper_16.addFeatures(features_DivaaKoper_16);
var lyr_DivaaKoper_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivaaKoper_16, 
                style: style_DivaaKoper_16,
                interactive: false,
                title: '<img src="styles/legend/DivaaKoper_16.png" /> Divača-Koper'
            });
var format_Kulturna_dediscina_17 = new ol.format.GeoJSON();
var features_Kulturna_dediscina_17 = format_Kulturna_dediscina_17.readFeatures(json_Kulturna_dediscina_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kulturna_dediscina_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kulturna_dediscina_17.addFeatures(features_Kulturna_dediscina_17);
var lyr_Kulturna_dediscina_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kulturna_dediscina_17, 
                style: style_Kulturna_dediscina_17,
                interactive: false,
                title: '<img src="styles/legend/Kulturna_dediscina_17.png" /> Kulturna_dediscina'
            });
var format_Natura_2000_18 = new ol.format.GeoJSON();
var features_Natura_2000_18 = format_Natura_2000_18.readFeatures(json_Natura_2000_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Natura_2000_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Natura_2000_18.addFeatures(features_Natura_2000_18);
var lyr_Natura_2000_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Natura_2000_18, 
                style: style_Natura_2000_18,
                interactive: false,
                title: '<img src="styles/legend/Natura_2000_18.png" /> Natura_2000'
            });
var format_VVO_dravni_nivo_19 = new ol.format.GeoJSON();
var features_VVO_dravni_nivo_19 = format_VVO_dravni_nivo_19.readFeatures(json_VVO_dravni_nivo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VVO_dravni_nivo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VVO_dravni_nivo_19.addFeatures(features_VVO_dravni_nivo_19);
var lyr_VVO_dravni_nivo_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VVO_dravni_nivo_19, 
                style: style_VVO_dravni_nivo_19,
                interactive: false,
                title: '<img src="styles/legend/VVO_dravni_nivo_19.png" /> VVO_državni_nivo'
            });
var format_VVO_obcinski_nivo_20 = new ol.format.GeoJSON();
var features_VVO_obcinski_nivo_20 = format_VVO_obcinski_nivo_20.readFeatures(json_VVO_obcinski_nivo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VVO_obcinski_nivo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VVO_obcinski_nivo_20.addFeatures(features_VVO_obcinski_nivo_20);
var lyr_VVO_obcinski_nivo_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VVO_obcinski_nivo_20, 
                style: style_VVO_obcinski_nivo_20,
                interactive: false,
                title: '<img src="styles/legend/VVO_obcinski_nivo_20.png" /> VVO_obcinski_nivo'
            });
var format_GrobelnoPragersko_21 = new ol.format.GeoJSON();
var features_GrobelnoPragersko_21 = format_GrobelnoPragersko_21.readFeatures(json_GrobelnoPragersko_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrobelnoPragersko_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrobelnoPragersko_21.addFeatures(features_GrobelnoPragersko_21);
var lyr_GrobelnoPragersko_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GrobelnoPragersko_21, 
                style: style_GrobelnoPragersko_21,
                interactive: false,
                title: '<img src="styles/legend/GrobelnoPragersko_21.png" /> Grobelno-Pragersko '
            });
var format_KresniceZagorje_22 = new ol.format.GeoJSON();
var features_KresniceZagorje_22 = format_KresniceZagorje_22.readFeatures(json_KresniceZagorje_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KresniceZagorje_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KresniceZagorje_22.addFeatures(features_KresniceZagorje_22);
var lyr_KresniceZagorje_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KresniceZagorje_22, 
                style: style_KresniceZagorje_22,
                interactive: false,
                title: '<img src="styles/legend/KresniceZagorje_22.png" /> Kresnice-Zagorje'
            });
var format_ZagorjeCelje_23 = new ol.format.GeoJSON();
var features_ZagorjeCelje_23 = format_ZagorjeCelje_23.readFeatures(json_ZagorjeCelje_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZagorjeCelje_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZagorjeCelje_23.addFeatures(features_ZagorjeCelje_23);
var lyr_ZagorjeCelje_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZagorjeCelje_23, 
                style: style_ZagorjeCelje_23,
                interactive: false,
                title: '<img src="styles/legend/ZagorjeCelje_23.png" /> Zagorje-Celje'
            });
var format_Dolenjskaproga_24 = new ol.format.GeoJSON();
var features_Dolenjskaproga_24 = format_Dolenjskaproga_24.readFeatures(json_Dolenjskaproga_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dolenjskaproga_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dolenjskaproga_24.addFeatures(features_Dolenjskaproga_24);
var lyr_Dolenjskaproga_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dolenjskaproga_24, 
                style: style_Dolenjskaproga_24,
                interactive: false,
                title: '<img src="styles/legend/Dolenjskaproga_24.png" /> Dolenjska proga'
            });
var format_DomaleKranjZlatoPolje_25 = new ol.format.GeoJSON();
var features_DomaleKranjZlatoPolje_25 = format_DomaleKranjZlatoPolje_25.readFeatures(json_DomaleKranjZlatoPolje_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DomaleKranjZlatoPolje_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DomaleKranjZlatoPolje_25.addFeatures(features_DomaleKranjZlatoPolje_25);
var lyr_DomaleKranjZlatoPolje_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DomaleKranjZlatoPolje_25, 
                style: style_DomaleKranjZlatoPolje_25,
                interactive: false,
                title: '<img src="styles/legend/DomaleKranjZlatoPolje_25.png" /> Domžale-Kranj Zlato Polje'
            });
var format_MosteDomale_26 = new ol.format.GeoJSON();
var features_MosteDomale_26 = format_MosteDomale_26.readFeatures(json_MosteDomale_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MosteDomale_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MosteDomale_26.addFeatures(features_MosteDomale_26);
var lyr_MosteDomale_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MosteDomale_26, 
                style: style_MosteDomale_26,
                interactive: false,
                title: '<img src="styles/legend/MosteDomale_26.png" /> Moste-Domžale'
            });
var format_Zahodnaobvoznaproga_27 = new ol.format.GeoJSON();
var features_Zahodnaobvoznaproga_27 = format_Zahodnaobvoznaproga_27.readFeatures(json_Zahodnaobvoznaproga_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zahodnaobvoznaproga_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zahodnaobvoznaproga_27.addFeatures(features_Zahodnaobvoznaproga_27);
var lyr_Zahodnaobvoznaproga_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zahodnaobvoznaproga_27, 
                style: style_Zahodnaobvoznaproga_27,
                interactive: false,
                title: '<img src="styles/legend/Zahodnaobvoznaproga_27.png" /> Zahodna obvozna proga'
            });
var format_Kamnikaproga_28 = new ol.format.GeoJSON();
var features_Kamnikaproga_28 = format_Kamnikaproga_28.readFeatures(json_Kamnikaproga_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kamnikaproga_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kamnikaproga_28.addFeatures(features_Kamnikaproga_28);
var lyr_Kamnikaproga_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kamnikaproga_28, 
                style: style_Kamnikaproga_28,
                interactive: false,
                title: '<img src="styles/legend/Kamnikaproga_28.png" /> Kamniška proga'
            });
var format_LjubljanaZidaniMost_29 = new ol.format.GeoJSON();
var features_LjubljanaZidaniMost_29 = format_LjubljanaZidaniMost_29.readFeatures(json_LjubljanaZidaniMost_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaZidaniMost_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaZidaniMost_29.addFeatures(features_LjubljanaZidaniMost_29);
var lyr_LjubljanaZidaniMost_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaZidaniMost_29, 
                style: style_LjubljanaZidaniMost_29,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaZidaniMost_29.png" /> Ljubljana-Zidani Most'
            });
var format_LjubljanaDivaa_30 = new ol.format.GeoJSON();
var features_LjubljanaDivaa_30 = format_LjubljanaDivaa_30.readFeatures(json_LjubljanaDivaa_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaDivaa_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaDivaa_30.addFeatures(features_LjubljanaDivaa_30);
var lyr_LjubljanaDivaa_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaDivaa_30, 
                style: style_LjubljanaDivaa_30,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaDivaa_30.png" /> Ljubljana-Divača '
            });
var format_DivaaTri_31 = new ol.format.GeoJSON();
var features_DivaaTri_31 = format_DivaaTri_31.readFeatures(json_DivaaTri_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivaaTri_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivaaTri_31.addFeatures(features_DivaaTri_31);
var lyr_DivaaTri_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivaaTri_31, 
                style: style_DivaaTri_31,
                interactive: false,
                title: '<img src="styles/legend/DivaaTri_31.png" /> Divača-Tržič '
            });
var format_DivaaTrst_32 = new ol.format.GeoJSON();
var features_DivaaTrst_32 = format_DivaaTrst_32.readFeatures(json_DivaaTrst_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivaaTrst_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivaaTrst_32.addFeatures(features_DivaaTrst_32);
var lyr_DivaaTrst_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivaaTrst_32, 
                style: style_DivaaTrst_32,
                interactive: false,
                title: '<img src="styles/legend/DivaaTrst_32.png" /> Divača-Trst '
            });
var format_MariborMurskaSobota_33 = new ol.format.GeoJSON();
var features_MariborMurskaSobota_33 = format_MariborMurskaSobota_33.readFeatures(json_MariborMurskaSobota_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MariborMurskaSobota_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MariborMurskaSobota_33.addFeatures(features_MariborMurskaSobota_33);
var lyr_MariborMurskaSobota_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MariborMurskaSobota_33, 
                style: style_MariborMurskaSobota_33,
                interactive: false,
                title: '<img src="styles/legend/MariborMurskaSobota_33.png" /> Maribor-Murska Sobota '
            });
var format_BeltinciLendava_34 = new ol.format.GeoJSON();
var features_BeltinciLendava_34 = format_BeltinciLendava_34.readFeatures(json_BeltinciLendava_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BeltinciLendava_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BeltinciLendava_34.addFeatures(features_BeltinciLendava_34);
var lyr_BeltinciLendava_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BeltinciLendava_34, 
                style: style_BeltinciLendava_34,
                interactive: false,
                title: '<img src="styles/legend/BeltinciLendava_34.png" /> Beltinci-Lendava'
            });
var format_LjubljanaDivaa_35 = new ol.format.GeoJSON();
var features_LjubljanaDivaa_35 = format_LjubljanaDivaa_35.readFeatures(json_LjubljanaDivaa_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaDivaa_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaDivaa_35.addFeatures(features_LjubljanaDivaa_35);
var lyr_LjubljanaDivaa_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaDivaa_35, 
                style: style_LjubljanaDivaa_35,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaDivaa_35.png" /> Ljubljana-Divača'
            });
var format_empeterPragersko_36 = new ol.format.GeoJSON();
var features_empeterPragersko_36 = format_empeterPragersko_36.readFeatures(json_empeterPragersko_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_empeterPragersko_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_empeterPragersko_36.addFeatures(features_empeterPragersko_36);
var lyr_empeterPragersko_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_empeterPragersko_36, 
                style: style_empeterPragersko_36,
                interactive: false,
                title: '<img src="styles/legend/empeterPragersko_36.png" /> Šempeter-Pragersko '
            });
var format_Celjepostaja_37 = new ol.format.GeoJSON();
var features_Celjepostaja_37 = format_Celjepostaja_37.readFeatures(json_Celjepostaja_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Celjepostaja_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Celjepostaja_37.addFeatures(features_Celjepostaja_37);
var lyr_Celjepostaja_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Celjepostaja_37, 
                style: style_Celjepostaja_37,
                interactive: false,
                title: '<img src="styles/legend/Celjepostaja_37.png" /> Celje postaja '
            });
var format_LevecCelje_38 = new ol.format.GeoJSON();
var features_LevecCelje_38 = format_LevecCelje_38.readFeatures(json_LevecCelje_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LevecCelje_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LevecCelje_38.addFeatures(features_LevecCelje_38);
var lyr_LevecCelje_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LevecCelje_38, 
                style: style_LevecCelje_38,
                interactive: false,
                title: '<img src="styles/legend/LevecCelje_38.png" /> Levec-Celje '
            });
var format_LjubljanaCelje_39 = new ol.format.GeoJSON();
var features_LjubljanaCelje_39 = format_LjubljanaCelje_39.readFeatures(json_LjubljanaCelje_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaCelje_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaCelje_39.addFeatures(features_LjubljanaCelje_39);
var lyr_LjubljanaCelje_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaCelje_39, 
                style: style_LjubljanaCelje_39,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaCelje_39.png" /> Ljubljana-Celje'
            });
var format_Zagorjeempeter_40 = new ol.format.GeoJSON();
var features_Zagorjeempeter_40 = format_Zagorjeempeter_40.readFeatures(json_Zagorjeempeter_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zagorjeempeter_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zagorjeempeter_40.addFeatures(features_Zagorjeempeter_40);
var lyr_Zagorjeempeter_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zagorjeempeter_40, 
                style: style_Zagorjeempeter_40,
                interactive: false,
                title: '<img src="styles/legend/Zagorjeempeter_40.png" /> Zagorje-Šempeter '
            });
var format_NavezavaBrnik_41 = new ol.format.GeoJSON();
var features_NavezavaBrnik_41 = format_NavezavaBrnik_41.readFeatures(json_NavezavaBrnik_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NavezavaBrnik_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NavezavaBrnik_41.addFeatures(features_NavezavaBrnik_41);
var lyr_NavezavaBrnik_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NavezavaBrnik_41, 
                style: style_NavezavaBrnik_41,
                interactive: false,
                title: '<img src="styles/legend/NavezavaBrnik_41.png" /> Navezava Brnik'
            });
var format_Gorenjskaproga_42 = new ol.format.GeoJSON();
var features_Gorenjskaproga_42 = format_Gorenjskaproga_42.readFeatures(json_Gorenjskaproga_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorenjskaproga_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorenjskaproga_42.addFeatures(features_Gorenjskaproga_42);
var lyr_Gorenjskaproga_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gorenjskaproga_42, 
                style: style_Gorenjskaproga_42,
                interactive: false,
                title: '<img src="styles/legend/Gorenjskaproga_42.png" /> Gorenjska proga'
            });
var group_Vizija = new ol.layer.Group({
                                layers: [lyr_DivaaTrst_32,lyr_MariborMurskaSobota_33,lyr_BeltinciLendava_34,lyr_LjubljanaDivaa_35,lyr_empeterPragersko_36,lyr_Celjepostaja_37,lyr_LevecCelje_38,lyr_LjubljanaCelje_39,lyr_Zagorjeempeter_40,],
                                title: "Vizija"});
var group_AdriaA = new ol.layer.Group({
                                layers: [lyr_DivaaTri_31,],
                                title: "Adria-A"});
var group_VZP = new ol.layer.Group({
                                layers: [lyr_LjubljanaZidaniMost_29,lyr_LjubljanaDivaa_30,],
                                title: "VZP"});
var group_RegioLURR2 = new ol.layer.Group({
                                layers: [lyr_Dolenjskaproga_24,lyr_DomaleKranjZlatoPolje_25,lyr_MosteDomale_26,lyr_Zahodnaobvoznaproga_27,lyr_Kamnikaproga_28,],
                                title: "Regio-LUR R2"});
var group_PISkrajevanjeasovMBLJ = new ol.layer.Group({
                                layers: [lyr_GrobelnoPragersko_21,lyr_KresniceZagorje_22,lyr_ZagorjeCelje_23,],
                                title: "PI Skrajševanje časov MB-LJ"});
var group_Okoljeinprostor = new ol.layer.Group({
                                layers: [lyr_Kulturna_dediscina_17,lyr_Natura_2000_18,lyr_VVO_dravni_nivo_19,lyr_VVO_obcinski_nivo_20,],
                                title: "Okolje in prostor"});
var group_Obstojeeomreje = new ol.layer.Group({
                                layers: [lyr_Obstojeeproge_14,lyr_Obstojeepostaje_15,lyr_DivaaKoper_16,],
                                title: "Obstoječe omrežje"});
var group_Zalednikoridorjihitrihprog = new ol.layer.Group({
                                layers: [lyr_IT_9,lyr_AT_10,lyr_HU_11,lyr_HR_12,lyr_Slovenija_13,],
                                title: "Zaledni koridorji hitrih prog"});
var group_Podloge = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_4,lyr_Esritopo_5,lyr_Esrisatelit_6,lyr_Carto_light_nolabels_7,lyr_Drave_8,],
                                title: "Podloge"});
var group_LV = new ol.layer.Group({
                                layers: [lyr_PredorZalogBrezovica_0,lyr_Optimiziranipredori_1,lyr_Vzhodnojunaobvoznica_2,lyr_Severnozahodnaobvoznica_3,],
                                title: "LŽV"});

lyr_PredorZalogBrezovica_0.setVisible(true);lyr_Optimiziranipredori_1.setVisible(true);lyr_Vzhodnojunaobvoznica_2.setVisible(true);lyr_Severnozahodnaobvoznica_3.setVisible(true);lyr_OpenStreetMap_4.setVisible(true);lyr_Esritopo_5.setVisible(true);lyr_Esrisatelit_6.setVisible(true);lyr_Carto_light_nolabels_7.setVisible(true);lyr_Drave_8.setVisible(true);lyr_IT_9.setVisible(true);lyr_AT_10.setVisible(true);lyr_HU_11.setVisible(true);lyr_HR_12.setVisible(true);lyr_Slovenija_13.setVisible(true);lyr_Obstojeeproge_14.setVisible(true);lyr_Obstojeepostaje_15.setVisible(true);lyr_DivaaKoper_16.setVisible(true);lyr_Kulturna_dediscina_17.setVisible(false);lyr_Natura_2000_18.setVisible(false);lyr_VVO_dravni_nivo_19.setVisible(false);lyr_VVO_obcinski_nivo_20.setVisible(false);lyr_GrobelnoPragersko_21.setVisible(true);lyr_KresniceZagorje_22.setVisible(true);lyr_ZagorjeCelje_23.setVisible(true);lyr_Dolenjskaproga_24.setVisible(true);lyr_DomaleKranjZlatoPolje_25.setVisible(true);lyr_MosteDomale_26.setVisible(true);lyr_Zahodnaobvoznaproga_27.setVisible(true);lyr_Kamnikaproga_28.setVisible(true);lyr_LjubljanaZidaniMost_29.setVisible(true);lyr_LjubljanaDivaa_30.setVisible(true);lyr_DivaaTri_31.setVisible(true);lyr_DivaaTrst_32.setVisible(true);lyr_MariborMurskaSobota_33.setVisible(true);lyr_BeltinciLendava_34.setVisible(true);lyr_LjubljanaDivaa_35.setVisible(true);lyr_empeterPragersko_36.setVisible(true);lyr_Celjepostaja_37.setVisible(true);lyr_LevecCelje_38.setVisible(true);lyr_LjubljanaCelje_39.setVisible(true);lyr_Zagorjeempeter_40.setVisible(true);lyr_NavezavaBrnik_41.setVisible(true);lyr_Gorenjskaproga_42.setVisible(true);
var layersList = [group_LV,group_Podloge,group_Zalednikoridorjihitrihprog,group_Obstojeeomreje,group_Okoljeinprostor,group_PISkrajevanjeasovMBLJ,group_RegioLURR2,group_VZP,group_AdriaA,group_Vizija,lyr_NavezavaBrnik_41,lyr_Gorenjskaproga_42];
lyr_PredorZalogBrezovica_0.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Optimiziranipredori_1.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Vzhodnojunaobvoznica_2.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Severnozahodnaobvoznica_3.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Drave_8.set('fieldAliases', {'FID_3': 'FID_3', 'NUTS_3': 'NUTS_3', 'NAME_NUTS3': 'NAME_NUTS3', 'FID_2': 'FID_2', 'NUTS_2': 'NUTS_2', 'NAME_NUTS2': 'NAME_NUTS2', 'FID_1': 'FID_1', 'NUTS_1': 'NUTS_1', 'NAME_NUTS1': 'NAME_NUTS1', 'FID_0': 'FID_0', 'NUTS_0': 'NUTS_0', 'NAME_NUTS0': 'NAME_NUTS0', 'orig_pov': 'orig_pov', });
lyr_Slovenija_13.set('fieldAliases', {'UE_MID': 'UE_MID', 'UE_ID': 'UE_ID', 'UE_IME': 'UE_IME', 'D_OD': 'D_OD', 'POVRSINA': 'POVRSINA', 'Y_C': 'Y_C', 'X_C': 'X_C', 'UE_STDM': 'UE_STDM', });
lyr_Obstojeeproge_14.set('fieldAliases', {'qc_id': 'qc_id', 'sž_ime_p~': 'sž_ime_p~', 'sž_kateg~': 'sž_kateg~', 'sž_števi': 'sž_števi', });
lyr_Obstojeepostaje_15.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'name': 'name', });
lyr_DivaaKoper_16.set('fieldAliases', {'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_Kulturna_dediscina_17.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_Natura_2000_18.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', });
lyr_VVO_dravni_nivo_19.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_VVO_obcinski_nivo_20.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_GrobelnoPragersko_21.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_KresniceZagorje_22.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_ZagorjeCelje_23.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Dolenjskaproga_24.set('fieldAliases', {'id': 'id', });
lyr_DomaleKranjZlatoPolje_25.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_MosteDomale_26.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'r_no': 'r_no', });
lyr_Zahodnaobvoznaproga_27.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_Kamnikaproga_28.set('fieldAliases', {'id': 'id', });
lyr_LjubljanaZidaniMost_29.set('fieldAliases', {'VZP2_ID': 'VZP2_ID', });
lyr_LjubljanaDivaa_30.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_DivaaTri_31.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_DivaaTrst_32.set('fieldAliases', {'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_MariborMurskaSobota_33.set('fieldAliases', {'qc_id': 'qc_id', 'tip odseka': 'tip odseka', 'length': 'length', });
lyr_BeltinciLendava_34.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LjubljanaDivaa_35.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_empeterPragersko_36.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Celjepostaja_37.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LevecCelje_38.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LjubljanaCelje_39.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Zagorjeempeter_40.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_NavezavaBrnik_41.set('fieldAliases', {'FID': 'FID', });
lyr_Gorenjskaproga_42.set('fieldAliases', {'NO': 'NO', });
lyr_PredorZalogBrezovica_0.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Optimiziranipredori_1.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Vzhodnojunaobvoznica_2.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'Range', });
lyr_Severnozahodnaobvoznica_3.set('fieldImages', {'tipodseka': '', 'length': 'TextEdit', });
lyr_Drave_8.set('fieldImages', {'FID_3': 'Range', 'NUTS_3': 'TextEdit', 'NAME_NUTS3': 'TextEdit', 'FID_2': 'Range', 'NUTS_2': 'TextEdit', 'NAME_NUTS2': 'TextEdit', 'FID_1': 'Range', 'NUTS_1': 'TextEdit', 'NAME_NUTS1': 'TextEdit', 'FID_0': 'TextEdit', 'NUTS_0': 'TextEdit', 'NAME_NUTS0': 'TextEdit', 'orig_pov': 'TextEdit', });
lyr_Slovenija_13.set('fieldImages', {'UE_MID': '', 'UE_ID': '', 'UE_IME': '', 'D_OD': '', 'POVRSINA': '', 'Y_C': '', 'X_C': '', 'UE_STDM': '', });
lyr_Obstojeeproge_14.set('fieldImages', {'qc_id': 'TextEdit', 'sž_ime_p~': 'TextEdit', 'sž_kateg~': 'TextEdit', 'sž_števi': 'TextEdit', });
lyr_Obstojeepostaje_15.set('fieldImages', {'qc_id': 'TextEdit', 'no': 'TextEdit', 'name': 'TextEdit', });
lyr_DivaaKoper_16.set('fieldImages', {'Tipodseka': 'TextEdit', 'Length': 'TextEdit', });
lyr_Kulturna_dediscina_17.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_Natura_2000_18.set('fieldImages', {'qc_id': 'TextEdit', 'objectid': 'TextEdit', });
lyr_VVO_dravni_nivo_19.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_VVO_obcinski_nivo_20.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_GrobelnoPragersko_21.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_KresniceZagorje_22.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_ZagorjeCelje_23.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Dolenjskaproga_24.set('fieldImages', {'id': '', });
lyr_DomaleKranjZlatoPolje_25.set('fieldImages', {'qc_id': '', });
lyr_MosteDomale_26.set('fieldImages', {'qc_id': '', 'no': '', 'r_no': '', });
lyr_Zahodnaobvoznaproga_27.set('fieldImages', {'qc_id': '', });
lyr_Kamnikaproga_28.set('fieldImages', {'id': '', });
lyr_LjubljanaZidaniMost_29.set('fieldImages', {'VZP2_ID': '', });
lyr_LjubljanaDivaa_30.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_DivaaTri_31.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_DivaaTrst_32.set('fieldImages', {'Tipodseka': '', 'Length': '', });
lyr_MariborMurskaSobota_33.set('fieldImages', {'qc_id': '', 'tip odseka': '', 'length': '', });
lyr_BeltinciLendava_34.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_LjubljanaDivaa_35.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_empeterPragersko_36.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Celjepostaja_37.set('fieldImages', {'qc_id_0': '', 'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_LevecCelje_38.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_LjubljanaCelje_39.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Zagorjeempeter_40.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_NavezavaBrnik_41.set('fieldImages', {'FID': '', });
lyr_Gorenjskaproga_42.set('fieldImages', {'NO': '', });
lyr_PredorZalogBrezovica_0.set('fieldLabels', {});
lyr_Optimiziranipredori_1.set('fieldLabels', {});
lyr_Vzhodnojunaobvoznica_2.set('fieldLabels', {});
lyr_Severnozahodnaobvoznica_3.set('fieldLabels', {});
lyr_Drave_8.set('fieldLabels', {});
lyr_Slovenija_13.set('fieldLabels', {});
lyr_Obstojeeproge_14.set('fieldLabels', {});
lyr_Obstojeepostaje_15.set('fieldLabels', {});
lyr_DivaaKoper_16.set('fieldLabels', {});
lyr_Kulturna_dediscina_17.set('fieldLabels', {});
lyr_Natura_2000_18.set('fieldLabels', {});
lyr_VVO_dravni_nivo_19.set('fieldLabels', {});
lyr_VVO_obcinski_nivo_20.set('fieldLabels', {});
lyr_GrobelnoPragersko_21.set('fieldLabels', {});
lyr_KresniceZagorje_22.set('fieldLabels', {});
lyr_ZagorjeCelje_23.set('fieldLabels', {});
lyr_Dolenjskaproga_24.set('fieldLabels', {});
lyr_DomaleKranjZlatoPolje_25.set('fieldLabels', {});
lyr_MosteDomale_26.set('fieldLabels', {});
lyr_Zahodnaobvoznaproga_27.set('fieldLabels', {});
lyr_Kamnikaproga_28.set('fieldLabels', {});
lyr_LjubljanaZidaniMost_29.set('fieldLabels', {});
lyr_LjubljanaDivaa_30.set('fieldLabels', {});
lyr_DivaaTri_31.set('fieldLabels', {});
lyr_DivaaTrst_32.set('fieldLabels', {});
lyr_MariborMurskaSobota_33.set('fieldLabels', {});
lyr_BeltinciLendava_34.set('fieldLabels', {});
lyr_LjubljanaDivaa_35.set('fieldLabels', {});
lyr_empeterPragersko_36.set('fieldLabels', {});
lyr_Celjepostaja_37.set('fieldLabels', {});
lyr_LevecCelje_38.set('fieldLabels', {});
lyr_LjubljanaCelje_39.set('fieldLabels', {});
lyr_Zagorjeempeter_40.set('fieldLabels', {});
lyr_NavezavaBrnik_41.set('fieldLabels', {'FID': 'no label', });
lyr_Gorenjskaproga_42.set('fieldLabels', {'NO': 'no label', });
lyr_Gorenjskaproga_42.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});