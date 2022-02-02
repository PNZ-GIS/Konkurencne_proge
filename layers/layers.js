var wms_layers = [];

var format_8_LVVariantaDPredorZalogBrezovica_0 = new ol.format.GeoJSON();
var features_8_LVVariantaDPredorZalogBrezovica_0 = format_8_LVVariantaDPredorZalogBrezovica_0.readFeatures(json_8_LVVariantaDPredorZalogBrezovica_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_LVVariantaDPredorZalogBrezovica_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_LVVariantaDPredorZalogBrezovica_0.addFeatures(features_8_LVVariantaDPredorZalogBrezovica_0);
var lyr_8_LVVariantaDPredorZalogBrezovica_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8_LVVariantaDPredorZalogBrezovica_0, 
                style: style_8_LVVariantaDPredorZalogBrezovica_0,
                interactive: false,
                title: '<img src="styles/legend/8_LVVariantaDPredorZalogBrezovica_0.png" /> 8_LŽV Varianta D Predor Zalog - Brezovica'
            });
var format_8_LVVariantaCOptimiziranipredoriLV4_1 = new ol.format.GeoJSON();
var features_8_LVVariantaCOptimiziranipredoriLV4_1 = format_8_LVVariantaCOptimiziranipredoriLV4_1.readFeatures(json_8_LVVariantaCOptimiziranipredoriLV4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_LVVariantaCOptimiziranipredoriLV4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_LVVariantaCOptimiziranipredoriLV4_1.addFeatures(features_8_LVVariantaCOptimiziranipredoriLV4_1);
var lyr_8_LVVariantaCOptimiziranipredoriLV4_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8_LVVariantaCOptimiziranipredoriLV4_1, 
                style: style_8_LVVariantaCOptimiziranipredoriLV4_1,
                interactive: false,
                title: '<img src="styles/legend/8_LVVariantaCOptimiziranipredoriLV4_1.png" /> 8_LŽV Varianta C Optimizirani predori LŽV 4'
            });
var format_8_LVVariantaBVzhodnojunaobvoznica_2 = new ol.format.GeoJSON();
var features_8_LVVariantaBVzhodnojunaobvoznica_2 = format_8_LVVariantaBVzhodnojunaobvoznica_2.readFeatures(json_8_LVVariantaBVzhodnojunaobvoznica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_LVVariantaBVzhodnojunaobvoznica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_LVVariantaBVzhodnojunaobvoznica_2.addFeatures(features_8_LVVariantaBVzhodnojunaobvoznica_2);
var lyr_8_LVVariantaBVzhodnojunaobvoznica_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8_LVVariantaBVzhodnojunaobvoznica_2, 
                style: style_8_LVVariantaBVzhodnojunaobvoznica_2,
                interactive: false,
                title: '<img src="styles/legend/8_LVVariantaBVzhodnojunaobvoznica_2.png" /> 8_LŽV Varianta B Vzhodno-južna obvoznica'
            });
var format_8_LVVariantaASevernozahodnaobvoznica_3 = new ol.format.GeoJSON();
var features_8_LVVariantaASevernozahodnaobvoznica_3 = format_8_LVVariantaASevernozahodnaobvoznica_3.readFeatures(json_8_LVVariantaASevernozahodnaobvoznica_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_LVVariantaASevernozahodnaobvoznica_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_LVVariantaASevernozahodnaobvoznica_3.addFeatures(features_8_LVVariantaASevernozahodnaobvoznica_3);
var lyr_8_LVVariantaASevernozahodnaobvoznica_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8_LVVariantaASevernozahodnaobvoznica_3, 
                style: style_8_LVVariantaASevernozahodnaobvoznica_3,
                interactive: false,
                title: '<img src="styles/legend/8_LVVariantaASevernozahodnaobvoznica_3.png" /> 8_LŽV Varianta A Severno-zahodna obvoznica'
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
var format_Obstojeeproge_9 = new ol.format.GeoJSON();
var features_Obstojeeproge_9 = format_Obstojeeproge_9.readFeatures(json_Obstojeeproge_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstojeeproge_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstojeeproge_9.addFeatures(features_Obstojeeproge_9);
var lyr_Obstojeeproge_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obstojeeproge_9, 
                style: style_Obstojeeproge_9,
                interactive: false,
                title: '<img src="styles/legend/Obstojeeproge_9.png" /> Obstoječe proge'
            });
var format_Obstojeepostaje_10 = new ol.format.GeoJSON();
var features_Obstojeepostaje_10 = format_Obstojeepostaje_10.readFeatures(json_Obstojeepostaje_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstojeepostaje_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstojeepostaje_10.addFeatures(features_Obstojeepostaje_10);
var lyr_Obstojeepostaje_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obstojeepostaje_10, 
                style: style_Obstojeepostaje_10,
                interactive: false,
                title: '<img src="styles/legend/Obstojeepostaje_10.png" /> Obstoječe postaje'
            });
var format_DivaaKoper_11 = new ol.format.GeoJSON();
var features_DivaaKoper_11 = format_DivaaKoper_11.readFeatures(json_DivaaKoper_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivaaKoper_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivaaKoper_11.addFeatures(features_DivaaKoper_11);
var lyr_DivaaKoper_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivaaKoper_11, 
                style: style_DivaaKoper_11,
                interactive: false,
                title: '<img src="styles/legend/DivaaKoper_11.png" /> Divača-Koper'
            });
var format_03_Kulturna_dediscina_12 = new ol.format.GeoJSON();
var features_03_Kulturna_dediscina_12 = format_03_Kulturna_dediscina_12.readFeatures(json_03_Kulturna_dediscina_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03_Kulturna_dediscina_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_Kulturna_dediscina_12.addFeatures(features_03_Kulturna_dediscina_12);
var lyr_03_Kulturna_dediscina_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_03_Kulturna_dediscina_12, 
                style: style_03_Kulturna_dediscina_12,
                interactive: false,
                title: '<img src="styles/legend/03_Kulturna_dediscina_12.png" /> 03_Kulturna_dediscina'
            });
var format_04_Natura_2000_D96_13 = new ol.format.GeoJSON();
var features_04_Natura_2000_D96_13 = format_04_Natura_2000_D96_13.readFeatures(json_04_Natura_2000_D96_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_Natura_2000_D96_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_Natura_2000_D96_13.addFeatures(features_04_Natura_2000_D96_13);
var lyr_04_Natura_2000_D96_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_04_Natura_2000_D96_13, 
                style: style_04_Natura_2000_D96_13,
                interactive: false,
                title: '<img src="styles/legend/04_Natura_2000_D96_13.png" /> 04_Natura_2000_D96'
            });
var format_14_VVO_dravni_nivo_14 = new ol.format.GeoJSON();
var features_14_VVO_dravni_nivo_14 = format_14_VVO_dravni_nivo_14.readFeatures(json_14_VVO_dravni_nivo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14_VVO_dravni_nivo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14_VVO_dravni_nivo_14.addFeatures(features_14_VVO_dravni_nivo_14);
var lyr_14_VVO_dravni_nivo_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_14_VVO_dravni_nivo_14, 
                style: style_14_VVO_dravni_nivo_14,
                interactive: false,
                title: '<img src="styles/legend/14_VVO_dravni_nivo_14.png" /> 14_VVO_državni_nivo'
            });
var format_15_VVO_obcinski_nivo_15 = new ol.format.GeoJSON();
var features_15_VVO_obcinski_nivo_15 = format_15_VVO_obcinski_nivo_15.readFeatures(json_15_VVO_obcinski_nivo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15_VVO_obcinski_nivo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15_VVO_obcinski_nivo_15.addFeatures(features_15_VVO_obcinski_nivo_15);
var lyr_15_VVO_obcinski_nivo_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_15_VVO_obcinski_nivo_15, 
                style: style_15_VVO_obcinski_nivo_15,
                interactive: false,
                title: '<img src="styles/legend/15_VVO_obcinski_nivo_15.png" /> 15_VVO_obcinski_nivo'
            });
var format_PIGrobelnoPragersko_16 = new ol.format.GeoJSON();
var features_PIGrobelnoPragersko_16 = format_PIGrobelnoPragersko_16.readFeatures(json_PIGrobelnoPragersko_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIGrobelnoPragersko_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIGrobelnoPragersko_16.addFeatures(features_PIGrobelnoPragersko_16);
var lyr_PIGrobelnoPragersko_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIGrobelnoPragersko_16, 
                style: style_PIGrobelnoPragersko_16,
                interactive: false,
                title: '<img src="styles/legend/PIGrobelnoPragersko_16.png" /> PI Grobelno-Pragersko '
            });
var format_PIKresniceZagorje_17 = new ol.format.GeoJSON();
var features_PIKresniceZagorje_17 = format_PIKresniceZagorje_17.readFeatures(json_PIKresniceZagorje_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIKresniceZagorje_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIKresniceZagorje_17.addFeatures(features_PIKresniceZagorje_17);
var lyr_PIKresniceZagorje_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIKresniceZagorje_17, 
                style: style_PIKresniceZagorje_17,
                interactive: false,
                title: '<img src="styles/legend/PIKresniceZagorje_17.png" /> PI Kresnice-Zagorje'
            });
var format_PIZagorjeCelje_18 = new ol.format.GeoJSON();
var features_PIZagorjeCelje_18 = format_PIZagorjeCelje_18.readFeatures(json_PIZagorjeCelje_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIZagorjeCelje_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIZagorjeCelje_18.addFeatures(features_PIZagorjeCelje_18);
var lyr_PIZagorjeCelje_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIZagorjeCelje_18, 
                style: style_PIZagorjeCelje_18,
                interactive: false,
                title: '<img src="styles/legend/PIZagorjeCelje_18.png" /> PI Zagorje-Celje'
            });
var format_R2_Dolenjskaproga_19 = new ol.format.GeoJSON();
var features_R2_Dolenjskaproga_19 = format_R2_Dolenjskaproga_19.readFeatures(json_R2_Dolenjskaproga_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R2_Dolenjskaproga_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R2_Dolenjskaproga_19.addFeatures(features_R2_Dolenjskaproga_19);
var lyr_R2_Dolenjskaproga_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R2_Dolenjskaproga_19, 
                style: style_R2_Dolenjskaproga_19,
                interactive: false,
                title: '<img src="styles/legend/R2_Dolenjskaproga_19.png" /> R2_Dolenjska proga'
            });
var format_R2_DomaleKranjZlatoPolje_20 = new ol.format.GeoJSON();
var features_R2_DomaleKranjZlatoPolje_20 = format_R2_DomaleKranjZlatoPolje_20.readFeatures(json_R2_DomaleKranjZlatoPolje_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R2_DomaleKranjZlatoPolje_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R2_DomaleKranjZlatoPolje_20.addFeatures(features_R2_DomaleKranjZlatoPolje_20);
var lyr_R2_DomaleKranjZlatoPolje_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R2_DomaleKranjZlatoPolje_20, 
                style: style_R2_DomaleKranjZlatoPolje_20,
                interactive: false,
                title: '<img src="styles/legend/R2_DomaleKranjZlatoPolje_20.png" /> R2_Domžale-Kranj Zlato Polje'
            });
var format_R2_MosteDomale_21 = new ol.format.GeoJSON();
var features_R2_MosteDomale_21 = format_R2_MosteDomale_21.readFeatures(json_R2_MosteDomale_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R2_MosteDomale_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R2_MosteDomale_21.addFeatures(features_R2_MosteDomale_21);
var lyr_R2_MosteDomale_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R2_MosteDomale_21, 
                style: style_R2_MosteDomale_21,
                interactive: false,
                title: '<img src="styles/legend/R2_MosteDomale_21.png" /> R2_Moste-Domžale'
            });
var format_R2_Zahodnaobvoznaproga_22 = new ol.format.GeoJSON();
var features_R2_Zahodnaobvoznaproga_22 = format_R2_Zahodnaobvoznaproga_22.readFeatures(json_R2_Zahodnaobvoznaproga_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R2_Zahodnaobvoznaproga_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R2_Zahodnaobvoznaproga_22.addFeatures(features_R2_Zahodnaobvoznaproga_22);
var lyr_R2_Zahodnaobvoznaproga_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R2_Zahodnaobvoznaproga_22, 
                style: style_R2_Zahodnaobvoznaproga_22,
                interactive: false,
                title: '<img src="styles/legend/R2_Zahodnaobvoznaproga_22.png" /> R2_Zahodna obvozna proga'
            });
var format_VZP_LjubljanaZidaniMost_23 = new ol.format.GeoJSON();
var features_VZP_LjubljanaZidaniMost_23 = format_VZP_LjubljanaZidaniMost_23.readFeatures(json_VZP_LjubljanaZidaniMost_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZP_LjubljanaZidaniMost_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZP_LjubljanaZidaniMost_23.addFeatures(features_VZP_LjubljanaZidaniMost_23);
var lyr_VZP_LjubljanaZidaniMost_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VZP_LjubljanaZidaniMost_23, 
                style: style_VZP_LjubljanaZidaniMost_23,
                interactive: false,
                title: '<img src="styles/legend/VZP_LjubljanaZidaniMost_23.png" /> VZP_Ljubljana-Zidani Most'
            });
var format_LjubljanaDivaa_24 = new ol.format.GeoJSON();
var features_LjubljanaDivaa_24 = format_LjubljanaDivaa_24.readFeatures(json_LjubljanaDivaa_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaDivaa_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaDivaa_24.addFeatures(features_LjubljanaDivaa_24);
var lyr_LjubljanaDivaa_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaDivaa_24, 
                style: style_LjubljanaDivaa_24,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaDivaa_24.png" /> Ljubljana-Divača '
            });
var format_DivaaTrst_25 = new ol.format.GeoJSON();
var features_DivaaTrst_25 = format_DivaaTrst_25.readFeatures(json_DivaaTrst_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivaaTrst_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivaaTrst_25.addFeatures(features_DivaaTrst_25);
var lyr_DivaaTrst_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivaaTrst_25, 
                style: style_DivaaTrst_25,
                interactive: false,
                title: '<img src="styles/legend/DivaaTrst_25.png" /> Divača-Trst '
            });
var format_DivaaTri_26 = new ol.format.GeoJSON();
var features_DivaaTri_26 = format_DivaaTri_26.readFeatures(json_DivaaTri_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivaaTri_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivaaTri_26.addFeatures(features_DivaaTri_26);
var lyr_DivaaTri_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivaaTri_26, 
                style: style_DivaaTri_26,
                interactive: false,
                title: '<img src="styles/legend/DivaaTri_26.png" /> Divača-Tržič '
            });
var format_MariborMurskaSobota_27 = new ol.format.GeoJSON();
var features_MariborMurskaSobota_27 = format_MariborMurskaSobota_27.readFeatures(json_MariborMurskaSobota_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MariborMurskaSobota_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MariborMurskaSobota_27.addFeatures(features_MariborMurskaSobota_27);
var lyr_MariborMurskaSobota_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MariborMurskaSobota_27, 
                style: style_MariborMurskaSobota_27,
                interactive: false,
                title: '<img src="styles/legend/MariborMurskaSobota_27.png" /> Maribor-Murska Sobota '
            });
var format_BeltinciLendava_28 = new ol.format.GeoJSON();
var features_BeltinciLendava_28 = format_BeltinciLendava_28.readFeatures(json_BeltinciLendava_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BeltinciLendava_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BeltinciLendava_28.addFeatures(features_BeltinciLendava_28);
var lyr_BeltinciLendava_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BeltinciLendava_28, 
                style: style_BeltinciLendava_28,
                interactive: false,
                title: '<img src="styles/legend/BeltinciLendava_28.png" /> Beltinci-Lendava'
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
var format_empeterPragersko_30 = new ol.format.GeoJSON();
var features_empeterPragersko_30 = format_empeterPragersko_30.readFeatures(json_empeterPragersko_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_empeterPragersko_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_empeterPragersko_30.addFeatures(features_empeterPragersko_30);
var lyr_empeterPragersko_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_empeterPragersko_30, 
                style: style_empeterPragersko_30,
                interactive: false,
                title: '<img src="styles/legend/empeterPragersko_30.png" /> Šempeter-Pragersko '
            });
var format_Celjepostaja_31 = new ol.format.GeoJSON();
var features_Celjepostaja_31 = format_Celjepostaja_31.readFeatures(json_Celjepostaja_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Celjepostaja_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Celjepostaja_31.addFeatures(features_Celjepostaja_31);
var lyr_Celjepostaja_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Celjepostaja_31, 
                style: style_Celjepostaja_31,
                interactive: false,
                title: '<img src="styles/legend/Celjepostaja_31.png" /> Celje postaja '
            });
var format_LevecCelje_32 = new ol.format.GeoJSON();
var features_LevecCelje_32 = format_LevecCelje_32.readFeatures(json_LevecCelje_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LevecCelje_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LevecCelje_32.addFeatures(features_LevecCelje_32);
var lyr_LevecCelje_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LevecCelje_32, 
                style: style_LevecCelje_32,
                interactive: false,
                title: '<img src="styles/legend/LevecCelje_32.png" /> Levec-Celje '
            });
var format_LjubljanaCelje_33 = new ol.format.GeoJSON();
var features_LjubljanaCelje_33 = format_LjubljanaCelje_33.readFeatures(json_LjubljanaCelje_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaCelje_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaCelje_33.addFeatures(features_LjubljanaCelje_33);
var lyr_LjubljanaCelje_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaCelje_33, 
                style: style_LjubljanaCelje_33,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaCelje_33.png" /> Ljubljana-Celje'
            });
var format_Zagorjeempeter_34 = new ol.format.GeoJSON();
var features_Zagorjeempeter_34 = format_Zagorjeempeter_34.readFeatures(json_Zagorjeempeter_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zagorjeempeter_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zagorjeempeter_34.addFeatures(features_Zagorjeempeter_34);
var lyr_Zagorjeempeter_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zagorjeempeter_34, 
                style: style_Zagorjeempeter_34,
                interactive: false,
                title: '<img src="styles/legend/Zagorjeempeter_34.png" /> Zagorje-Šempeter '
            });
var format_NavezavaBrnik_35 = new ol.format.GeoJSON();
var features_NavezavaBrnik_35 = format_NavezavaBrnik_35.readFeatures(json_NavezavaBrnik_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NavezavaBrnik_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NavezavaBrnik_35.addFeatures(features_NavezavaBrnik_35);
var lyr_NavezavaBrnik_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NavezavaBrnik_35, 
                style: style_NavezavaBrnik_35,
                interactive: false,
                title: '<img src="styles/legend/NavezavaBrnik_35.png" /> Navezava Brnik'
            });
var format_Gorenjskaproga_36 = new ol.format.GeoJSON();
var features_Gorenjskaproga_36 = format_Gorenjskaproga_36.readFeatures(json_Gorenjskaproga_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorenjskaproga_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorenjskaproga_36.addFeatures(features_Gorenjskaproga_36);
var lyr_Gorenjskaproga_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gorenjskaproga_36, 
                style: style_Gorenjskaproga_36,
                interactive: false,
                title: '<img src="styles/legend/Gorenjskaproga_36.png" /> Gorenjska proga'
            });
var group_Vizija = new ol.layer.Group({
                                layers: [lyr_MariborMurskaSobota_27,lyr_BeltinciLendava_28,lyr_LjubljanaDivaa_29,lyr_empeterPragersko_30,lyr_Celjepostaja_31,lyr_LevecCelje_32,lyr_LjubljanaCelje_33,lyr_Zagorjeempeter_34,],
                                title: "Vizija"});
var group_AdriaA = new ol.layer.Group({
                                layers: [lyr_DivaaTrst_25,lyr_DivaaTri_26,],
                                title: "Adria-A"});
var group_VZP = new ol.layer.Group({
                                layers: [lyr_VZP_LjubljanaZidaniMost_23,lyr_LjubljanaDivaa_24,],
                                title: "VZP"});
var group_RegioLUR = new ol.layer.Group({
                                layers: [lyr_R2_Dolenjskaproga_19,lyr_R2_DomaleKranjZlatoPolje_20,lyr_R2_MosteDomale_21,lyr_R2_Zahodnaobvoznaproga_22,],
                                title: "Regio-LUR"});
var group_PI = new ol.layer.Group({
                                layers: [lyr_PIGrobelnoPragersko_16,lyr_PIKresniceZagorje_17,lyr_PIZagorjeCelje_18,],
                                title: "PI"});
var group_Okoljeinprostor = new ol.layer.Group({
                                layers: [lyr_03_Kulturna_dediscina_12,lyr_04_Natura_2000_D96_13,lyr_14_VVO_dravni_nivo_14,lyr_15_VVO_obcinski_nivo_15,],
                                title: "Okolje in prostor"});
var group_Obstojeeomreje = new ol.layer.Group({
                                layers: [lyr_Obstojeeproge_9,lyr_Obstojeepostaje_10,lyr_DivaaKoper_11,],
                                title: "Obstoječe omrežje"});
var group_Podloge = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_4,lyr_Esritopo_5,lyr_Esrisatelit_6,lyr_Carto_light_nolabels_7,lyr_Drave_8,],
                                title: "Podloge"});
var group_LV = new ol.layer.Group({
                                layers: [lyr_8_LVVariantaDPredorZalogBrezovica_0,lyr_8_LVVariantaCOptimiziranipredoriLV4_1,lyr_8_LVVariantaBVzhodnojunaobvoznica_2,lyr_8_LVVariantaASevernozahodnaobvoznica_3,],
                                title: "LŽV"});

lyr_8_LVVariantaDPredorZalogBrezovica_0.setVisible(false);lyr_8_LVVariantaCOptimiziranipredoriLV4_1.setVisible(false);lyr_8_LVVariantaBVzhodnojunaobvoznica_2.setVisible(false);lyr_8_LVVariantaASevernozahodnaobvoznica_3.setVisible(false);lyr_OpenStreetMap_4.setVisible(true);lyr_Esritopo_5.setVisible(true);lyr_Esrisatelit_6.setVisible(true);lyr_Carto_light_nolabels_7.setVisible(true);lyr_Drave_8.setVisible(true);lyr_Obstojeeproge_9.setVisible(true);lyr_Obstojeepostaje_10.setVisible(true);lyr_DivaaKoper_11.setVisible(true);lyr_03_Kulturna_dediscina_12.setVisible(false);lyr_04_Natura_2000_D96_13.setVisible(false);lyr_14_VVO_dravni_nivo_14.setVisible(false);lyr_15_VVO_obcinski_nivo_15.setVisible(false);lyr_PIGrobelnoPragersko_16.setVisible(true);lyr_PIKresniceZagorje_17.setVisible(true);lyr_PIZagorjeCelje_18.setVisible(true);lyr_R2_Dolenjskaproga_19.setVisible(true);lyr_R2_DomaleKranjZlatoPolje_20.setVisible(true);lyr_R2_MosteDomale_21.setVisible(true);lyr_R2_Zahodnaobvoznaproga_22.setVisible(true);lyr_VZP_LjubljanaZidaniMost_23.setVisible(true);lyr_LjubljanaDivaa_24.setVisible(true);lyr_DivaaTrst_25.setVisible(true);lyr_DivaaTri_26.setVisible(true);lyr_MariborMurskaSobota_27.setVisible(true);lyr_BeltinciLendava_28.setVisible(true);lyr_LjubljanaDivaa_29.setVisible(true);lyr_empeterPragersko_30.setVisible(true);lyr_Celjepostaja_31.setVisible(true);lyr_LevecCelje_32.setVisible(true);lyr_LjubljanaCelje_33.setVisible(true);lyr_Zagorjeempeter_34.setVisible(true);lyr_NavezavaBrnik_35.setVisible(true);lyr_Gorenjskaproga_36.setVisible(true);
var layersList = [group_LV,group_Podloge,group_Obstojeeomreje,group_Okoljeinprostor,group_PI,group_RegioLUR,group_VZP,group_AdriaA,group_Vizija,lyr_NavezavaBrnik_35,lyr_Gorenjskaproga_36];
lyr_8_LVVariantaDPredorZalogBrezovica_0.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_8_LVVariantaCOptimiziranipredoriLV4_1.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_8_LVVariantaBVzhodnojunaobvoznica_2.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_8_LVVariantaASevernozahodnaobvoznica_3.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Drave_8.set('fieldAliases', {'FID_3': 'FID_3', 'NUTS_3': 'NUTS_3', 'NAME_NUTS3': 'NAME_NUTS3', 'FID_2': 'FID_2', 'NUTS_2': 'NUTS_2', 'NAME_NUTS2': 'NAME_NUTS2', 'FID_1': 'FID_1', 'NUTS_1': 'NUTS_1', 'NAME_NUTS1': 'NAME_NUTS1', 'FID_0': 'FID_0', 'NUTS_0': 'NUTS_0', 'NAME_NUTS0': 'NAME_NUTS0', 'orig_pov': 'orig_pov', });
lyr_Obstojeeproge_9.set('fieldAliases', {'qc_id': 'qc_id', 'sž_ime_p~': 'sž_ime_p~', 'sž_kateg~': 'sž_kateg~', 'sž_števi': 'sž_števi', });
lyr_Obstojeepostaje_10.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'name': 'name', });
lyr_DivaaKoper_11.set('fieldAliases', {'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_03_Kulturna_dediscina_12.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_04_Natura_2000_D96_13.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', });
lyr_14_VVO_dravni_nivo_14.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_15_VVO_obcinski_nivo_15.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_PIGrobelnoPragersko_16.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_PIKresniceZagorje_17.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_PIZagorjeCelje_18.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_R2_Dolenjskaproga_19.set('fieldAliases', {'id': 'id', });
lyr_R2_DomaleKranjZlatoPolje_20.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_R2_MosteDomale_21.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'r_no': 'r_no', });
lyr_R2_Zahodnaobvoznaproga_22.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_VZP_LjubljanaZidaniMost_23.set('fieldAliases', {'VZP2_ID': 'VZP2_ID', });
lyr_LjubljanaDivaa_24.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_DivaaTrst_25.set('fieldAliases', {'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_DivaaTri_26.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_MariborMurskaSobota_27.set('fieldAliases', {'qc_id': 'qc_id', 'tip odseka': 'tip odseka', 'length': 'length', });
lyr_BeltinciLendava_28.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LjubljanaDivaa_29.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_empeterPragersko_30.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Celjepostaja_31.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LevecCelje_32.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LjubljanaCelje_33.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Zagorjeempeter_34.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_NavezavaBrnik_35.set('fieldAliases', {'FID': 'FID', });
lyr_Gorenjskaproga_36.set('fieldAliases', {'NO': 'NO', });
lyr_8_LVVariantaDPredorZalogBrezovica_0.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_8_LVVariantaCOptimiziranipredoriLV4_1.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_8_LVVariantaBVzhodnojunaobvoznica_2.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'Range', });
lyr_8_LVVariantaASevernozahodnaobvoznica_3.set('fieldImages', {'tipodseka': '', 'length': 'TextEdit', });
lyr_Drave_8.set('fieldImages', {'FID_3': 'Range', 'NUTS_3': 'TextEdit', 'NAME_NUTS3': 'TextEdit', 'FID_2': 'Range', 'NUTS_2': 'TextEdit', 'NAME_NUTS2': 'TextEdit', 'FID_1': 'Range', 'NUTS_1': 'TextEdit', 'NAME_NUTS1': 'TextEdit', 'FID_0': 'TextEdit', 'NUTS_0': 'TextEdit', 'NAME_NUTS0': 'TextEdit', 'orig_pov': 'TextEdit', });
lyr_Obstojeeproge_9.set('fieldImages', {'qc_id': 'TextEdit', 'sž_ime_p~': 'TextEdit', 'sž_kateg~': 'TextEdit', 'sž_števi': 'TextEdit', });
lyr_Obstojeepostaje_10.set('fieldImages', {'qc_id': 'TextEdit', 'no': 'TextEdit', 'name': 'TextEdit', });
lyr_DivaaKoper_11.set('fieldImages', {'Tipodseka': 'TextEdit', 'Length': 'TextEdit', });
lyr_03_Kulturna_dediscina_12.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_04_Natura_2000_D96_13.set('fieldImages', {'qc_id': 'TextEdit', 'objectid': 'TextEdit', });
lyr_14_VVO_dravni_nivo_14.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_15_VVO_obcinski_nivo_15.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_PIGrobelnoPragersko_16.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_PIKresniceZagorje_17.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_PIZagorjeCelje_18.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_R2_Dolenjskaproga_19.set('fieldImages', {'id': '', });
lyr_R2_DomaleKranjZlatoPolje_20.set('fieldImages', {'qc_id': '', });
lyr_R2_MosteDomale_21.set('fieldImages', {'qc_id': '', 'no': '', 'r_no': '', });
lyr_R2_Zahodnaobvoznaproga_22.set('fieldImages', {'qc_id': '', });
lyr_VZP_LjubljanaZidaniMost_23.set('fieldImages', {'VZP2_ID': '', });
lyr_LjubljanaDivaa_24.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_DivaaTrst_25.set('fieldImages', {'Tipodseka': '', 'Length': '', });
lyr_DivaaTri_26.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_MariborMurskaSobota_27.set('fieldImages', {'qc_id': '', 'tip odseka': '', 'length': '', });
lyr_BeltinciLendava_28.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_LjubljanaDivaa_29.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_empeterPragersko_30.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Celjepostaja_31.set('fieldImages', {'qc_id_0': '', 'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_LevecCelje_32.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_LjubljanaCelje_33.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Zagorjeempeter_34.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_NavezavaBrnik_35.set('fieldImages', {'FID': '', });
lyr_Gorenjskaproga_36.set('fieldImages', {'NO': '', });
lyr_8_LVVariantaDPredorZalogBrezovica_0.set('fieldLabels', {});
lyr_8_LVVariantaCOptimiziranipredoriLV4_1.set('fieldLabels', {});
lyr_8_LVVariantaBVzhodnojunaobvoznica_2.set('fieldLabels', {});
lyr_8_LVVariantaASevernozahodnaobvoznica_3.set('fieldLabels', {});
lyr_Drave_8.set('fieldLabels', {});
lyr_Obstojeeproge_9.set('fieldLabels', {});
lyr_Obstojeepostaje_10.set('fieldLabels', {});
lyr_DivaaKoper_11.set('fieldLabels', {});
lyr_03_Kulturna_dediscina_12.set('fieldLabels', {});
lyr_04_Natura_2000_D96_13.set('fieldLabels', {});
lyr_14_VVO_dravni_nivo_14.set('fieldLabels', {});
lyr_15_VVO_obcinski_nivo_15.set('fieldLabels', {});
lyr_PIGrobelnoPragersko_16.set('fieldLabels', {});
lyr_PIKresniceZagorje_17.set('fieldLabels', {});
lyr_PIZagorjeCelje_18.set('fieldLabels', {});
lyr_R2_Dolenjskaproga_19.set('fieldLabels', {});
lyr_R2_DomaleKranjZlatoPolje_20.set('fieldLabels', {});
lyr_R2_MosteDomale_21.set('fieldLabels', {});
lyr_R2_Zahodnaobvoznaproga_22.set('fieldLabels', {});
lyr_VZP_LjubljanaZidaniMost_23.set('fieldLabels', {});
lyr_LjubljanaDivaa_24.set('fieldLabels', {});
lyr_DivaaTrst_25.set('fieldLabels', {});
lyr_DivaaTri_26.set('fieldLabels', {});
lyr_MariborMurskaSobota_27.set('fieldLabels', {});
lyr_BeltinciLendava_28.set('fieldLabels', {});
lyr_LjubljanaDivaa_29.set('fieldLabels', {});
lyr_empeterPragersko_30.set('fieldLabels', {});
lyr_Celjepostaja_31.set('fieldLabels', {});
lyr_LevecCelje_32.set('fieldLabels', {});
lyr_LjubljanaCelje_33.set('fieldLabels', {});
lyr_Zagorjeempeter_34.set('fieldLabels', {});
lyr_NavezavaBrnik_35.set('fieldLabels', {'FID': 'no label', });
lyr_Gorenjskaproga_36.set('fieldLabels', {'NO': 'no label', });
lyr_Gorenjskaproga_36.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});