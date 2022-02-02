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
var format_Obstojeeproge_5 = new ol.format.GeoJSON();
var features_Obstojeeproge_5 = format_Obstojeeproge_5.readFeatures(json_Obstojeeproge_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstojeeproge_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstojeeproge_5.addFeatures(features_Obstojeeproge_5);
var lyr_Obstojeeproge_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obstojeeproge_5, 
                style: style_Obstojeeproge_5,
                interactive: false,
                title: '<img src="styles/legend/Obstojeeproge_5.png" /> Obstoječe proge'
            });
var format_Obstojeepostaje_6 = new ol.format.GeoJSON();
var features_Obstojeepostaje_6 = format_Obstojeepostaje_6.readFeatures(json_Obstojeepostaje_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstojeepostaje_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstojeepostaje_6.addFeatures(features_Obstojeepostaje_6);
var lyr_Obstojeepostaje_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obstojeepostaje_6, 
                style: style_Obstojeepostaje_6,
                interactive: false,
                title: '<img src="styles/legend/Obstojeepostaje_6.png" /> Obstoječe postaje'
            });
var format_2_DivaaKoper_7 = new ol.format.GeoJSON();
var features_2_DivaaKoper_7 = format_2_DivaaKoper_7.readFeatures(json_2_DivaaKoper_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_DivaaKoper_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_DivaaKoper_7.addFeatures(features_2_DivaaKoper_7);
var lyr_2_DivaaKoper_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_DivaaKoper_7, 
                style: style_2_DivaaKoper_7,
                interactive: false,
                title: '<img src="styles/legend/2_DivaaKoper_7.png" /> 2_Divača-Koper'
            });
var format_03_Kulturna_dediscina_8 = new ol.format.GeoJSON();
var features_03_Kulturna_dediscina_8 = format_03_Kulturna_dediscina_8.readFeatures(json_03_Kulturna_dediscina_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03_Kulturna_dediscina_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_Kulturna_dediscina_8.addFeatures(features_03_Kulturna_dediscina_8);
var lyr_03_Kulturna_dediscina_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_03_Kulturna_dediscina_8, 
                style: style_03_Kulturna_dediscina_8,
                interactive: false,
                title: '<img src="styles/legend/03_Kulturna_dediscina_8.png" /> 03_Kulturna_dediscina'
            });
var format_04_Natura_2000_D96_9 = new ol.format.GeoJSON();
var features_04_Natura_2000_D96_9 = format_04_Natura_2000_D96_9.readFeatures(json_04_Natura_2000_D96_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_Natura_2000_D96_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_Natura_2000_D96_9.addFeatures(features_04_Natura_2000_D96_9);
var lyr_04_Natura_2000_D96_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_04_Natura_2000_D96_9, 
                style: style_04_Natura_2000_D96_9,
                interactive: false,
                title: '<img src="styles/legend/04_Natura_2000_D96_9.png" /> 04_Natura_2000_D96'
            });
var format_14_VVO_dravni_nivo_10 = new ol.format.GeoJSON();
var features_14_VVO_dravni_nivo_10 = format_14_VVO_dravni_nivo_10.readFeatures(json_14_VVO_dravni_nivo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14_VVO_dravni_nivo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14_VVO_dravni_nivo_10.addFeatures(features_14_VVO_dravni_nivo_10);
var lyr_14_VVO_dravni_nivo_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_14_VVO_dravni_nivo_10, 
                style: style_14_VVO_dravni_nivo_10,
                interactive: false,
                title: '<img src="styles/legend/14_VVO_dravni_nivo_10.png" /> 14_VVO_državni_nivo'
            });
var format_15_VVO_obcinski_nivo_11 = new ol.format.GeoJSON();
var features_15_VVO_obcinski_nivo_11 = format_15_VVO_obcinski_nivo_11.readFeatures(json_15_VVO_obcinski_nivo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15_VVO_obcinski_nivo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15_VVO_obcinski_nivo_11.addFeatures(features_15_VVO_obcinski_nivo_11);
var lyr_15_VVO_obcinski_nivo_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_15_VVO_obcinski_nivo_11, 
                style: style_15_VVO_obcinski_nivo_11,
                interactive: false,
                title: '<img src="styles/legend/15_VVO_obcinski_nivo_11.png" /> 15_VVO_obcinski_nivo'
            });
var format_8_LVVariantaDPredorZalogBrezovica_12 = new ol.format.GeoJSON();
var features_8_LVVariantaDPredorZalogBrezovica_12 = format_8_LVVariantaDPredorZalogBrezovica_12.readFeatures(json_8_LVVariantaDPredorZalogBrezovica_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_LVVariantaDPredorZalogBrezovica_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_LVVariantaDPredorZalogBrezovica_12.addFeatures(features_8_LVVariantaDPredorZalogBrezovica_12);
var lyr_8_LVVariantaDPredorZalogBrezovica_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8_LVVariantaDPredorZalogBrezovica_12, 
                style: style_8_LVVariantaDPredorZalogBrezovica_12,
                interactive: false,
                title: '<img src="styles/legend/8_LVVariantaDPredorZalogBrezovica_12.png" /> 8_LŽV Varianta D Predor Zalog - Brezovica'
            });
var format_8_LVVariantaCOptimiziranipredoriLV4_13 = new ol.format.GeoJSON();
var features_8_LVVariantaCOptimiziranipredoriLV4_13 = format_8_LVVariantaCOptimiziranipredoriLV4_13.readFeatures(json_8_LVVariantaCOptimiziranipredoriLV4_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_LVVariantaCOptimiziranipredoriLV4_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_LVVariantaCOptimiziranipredoriLV4_13.addFeatures(features_8_LVVariantaCOptimiziranipredoriLV4_13);
var lyr_8_LVVariantaCOptimiziranipredoriLV4_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8_LVVariantaCOptimiziranipredoriLV4_13, 
                style: style_8_LVVariantaCOptimiziranipredoriLV4_13,
                interactive: false,
                title: '<img src="styles/legend/8_LVVariantaCOptimiziranipredoriLV4_13.png" /> 8_LŽV Varianta C Optimizirani predori LŽV 4'
            });
var format_8_LVVariantaBVzhodnojunaobvoznica_14 = new ol.format.GeoJSON();
var features_8_LVVariantaBVzhodnojunaobvoznica_14 = format_8_LVVariantaBVzhodnojunaobvoznica_14.readFeatures(json_8_LVVariantaBVzhodnojunaobvoznica_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_LVVariantaBVzhodnojunaobvoznica_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_LVVariantaBVzhodnojunaobvoznica_14.addFeatures(features_8_LVVariantaBVzhodnojunaobvoznica_14);
var lyr_8_LVVariantaBVzhodnojunaobvoznica_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8_LVVariantaBVzhodnojunaobvoznica_14, 
                style: style_8_LVVariantaBVzhodnojunaobvoznica_14,
                interactive: false,
                title: '<img src="styles/legend/8_LVVariantaBVzhodnojunaobvoznica_14.png" /> 8_LŽV Varianta B Vzhodno-južna obvoznica'
            });
var format_8_LVVariantaASevernozahodnaobvoznica_15 = new ol.format.GeoJSON();
var features_8_LVVariantaASevernozahodnaobvoznica_15 = format_8_LVVariantaASevernozahodnaobvoznica_15.readFeatures(json_8_LVVariantaASevernozahodnaobvoznica_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_LVVariantaASevernozahodnaobvoznica_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_LVVariantaASevernozahodnaobvoznica_15.addFeatures(features_8_LVVariantaASevernozahodnaobvoznica_15);
var lyr_8_LVVariantaASevernozahodnaobvoznica_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8_LVVariantaASevernozahodnaobvoznica_15, 
                style: style_8_LVVariantaASevernozahodnaobvoznica_15,
                interactive: false,
                title: '<img src="styles/legend/8_LVVariantaASevernozahodnaobvoznica_15.png" /> 8_LŽV Varianta A Severno-zahodna obvoznica'
            });
var format_1_GrobelnoPragerskoVariantaD_16 = new ol.format.GeoJSON();
var features_1_GrobelnoPragerskoVariantaD_16 = format_1_GrobelnoPragerskoVariantaD_16.readFeatures(json_1_GrobelnoPragerskoVariantaD_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_GrobelnoPragerskoVariantaD_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_GrobelnoPragerskoVariantaD_16.addFeatures(features_1_GrobelnoPragerskoVariantaD_16);
var lyr_1_GrobelnoPragerskoVariantaD_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_GrobelnoPragerskoVariantaD_16, 
                style: style_1_GrobelnoPragerskoVariantaD_16,
                interactive: false,
                title: '<img src="styles/legend/1_GrobelnoPragerskoVariantaD_16.png" /> 1_Grobelno-Pragersko Varianta D'
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
var format_2_DivaaTrstVariantaC_25 = new ol.format.GeoJSON();
var features_2_DivaaTrstVariantaC_25 = format_2_DivaaTrstVariantaC_25.readFeatures(json_2_DivaaTrstVariantaC_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_DivaaTrstVariantaC_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_DivaaTrstVariantaC_25.addFeatures(features_2_DivaaTrstVariantaC_25);
var lyr_2_DivaaTrstVariantaC_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_DivaaTrstVariantaC_25, 
                style: style_2_DivaaTrstVariantaC_25,
                interactive: false,
                title: '<img src="styles/legend/2_DivaaTrstVariantaC_25.png" /> 2_Divača Trst Varianta C'
            });
var format_10_TrstKoperPiranVariantaB1_26 = new ol.format.GeoJSON();
var features_10_TrstKoperPiranVariantaB1_26 = format_10_TrstKoperPiranVariantaB1_26.readFeatures(json_10_TrstKoperPiranVariantaB1_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10_TrstKoperPiranVariantaB1_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10_TrstKoperPiranVariantaB1_26.addFeatures(features_10_TrstKoperPiranVariantaB1_26);
var lyr_10_TrstKoperPiranVariantaB1_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_10_TrstKoperPiranVariantaB1_26, 
                style: style_10_TrstKoperPiranVariantaB1_26,
                interactive: false,
                title: '<img src="styles/legend/10_TrstKoperPiranVariantaB1_26.png" /> 10_ Trst-Koper-Piran Varianta B1'
            });
var format_10_TrstKoperPiranVariantaA_27 = new ol.format.GeoJSON();
var features_10_TrstKoperPiranVariantaA_27 = format_10_TrstKoperPiranVariantaA_27.readFeatures(json_10_TrstKoperPiranVariantaA_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10_TrstKoperPiranVariantaA_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10_TrstKoperPiranVariantaA_27.addFeatures(features_10_TrstKoperPiranVariantaA_27);
var lyr_10_TrstKoperPiranVariantaA_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_10_TrstKoperPiranVariantaA_27, 
                style: style_10_TrstKoperPiranVariantaA_27,
                interactive: false,
                title: '<img src="styles/legend/10_TrstKoperPiranVariantaA_27.png" /> 10_ Trst-Koper-Piran Varianta A '
            });
var format_Divaa_Tri_28 = new ol.format.GeoJSON();
var features_Divaa_Tri_28 = format_Divaa_Tri_28.readFeatures(json_Divaa_Tri_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Divaa_Tri_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Divaa_Tri_28.addFeatures(features_Divaa_Tri_28);
var lyr_Divaa_Tri_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Divaa_Tri_28, 
                style: style_Divaa_Tri_28,
                interactive: false,
                title: '<img src="styles/legend/Divaa_Tri_28.png" /> Divača_Tržič '
            });
var format_12_MariborMurskaSobotaVariantaA_29 = new ol.format.GeoJSON();
var features_12_MariborMurskaSobotaVariantaA_29 = format_12_MariborMurskaSobotaVariantaA_29.readFeatures(json_12_MariborMurskaSobotaVariantaA_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12_MariborMurskaSobotaVariantaA_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12_MariborMurskaSobotaVariantaA_29.addFeatures(features_12_MariborMurskaSobotaVariantaA_29);
var lyr_12_MariborMurskaSobotaVariantaA_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_12_MariborMurskaSobotaVariantaA_29, 
                style: style_12_MariborMurskaSobotaVariantaA_29,
                interactive: false,
                title: '<img src="styles/legend/12_MariborMurskaSobotaVariantaA_29.png" /> 12_Maribor-Murska Sobota Varianta A'
            });
var format_11_MariborZagreb_30 = new ol.format.GeoJSON();
var features_11_MariborZagreb_30 = format_11_MariborZagreb_30.readFeatures(json_11_MariborZagreb_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11_MariborZagreb_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11_MariborZagreb_30.addFeatures(features_11_MariborZagreb_30);
var lyr_11_MariborZagreb_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_11_MariborZagreb_30, 
                style: style_11_MariborZagreb_30,
                interactive: false,
                title: '<img src="styles/legend/11_MariborZagreb_30.png" /> 11_Maribor-Zagreb'
            });
var format_9_LesceBledJezeroVariantaA_31 = new ol.format.GeoJSON();
var features_9_LesceBledJezeroVariantaA_31 = format_9_LesceBledJezeroVariantaA_31.readFeatures(json_9_LesceBledJezeroVariantaA_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9_LesceBledJezeroVariantaA_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9_LesceBledJezeroVariantaA_31.addFeatures(features_9_LesceBledJezeroVariantaA_31);
var lyr_9_LesceBledJezeroVariantaA_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_9_LesceBledJezeroVariantaA_31, 
                style: style_9_LesceBledJezeroVariantaA_31,
                interactive: false,
                title: '<img src="styles/legend/9_LesceBledJezeroVariantaA_31.png" /> 9_Lesce-Bled Jezero Varianta A'
            });
var format_7_BeltinciLendava_32 = new ol.format.GeoJSON();
var features_7_BeltinciLendava_32 = format_7_BeltinciLendava_32.readFeatures(json_7_BeltinciLendava_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7_BeltinciLendava_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7_BeltinciLendava_32.addFeatures(features_7_BeltinciLendava_32);
var lyr_7_BeltinciLendava_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_7_BeltinciLendava_32, 
                style: style_7_BeltinciLendava_32,
                interactive: false,
                title: '<img src="styles/legend/7_BeltinciLendava_32.png" /> 7_Beltinci-Lendava'
            });
var format_6_NovomestoDobova_33 = new ol.format.GeoJSON();
var features_6_NovomestoDobova_33 = format_6_NovomestoDobova_33.readFeatures(json_6_NovomestoDobova_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6_NovomestoDobova_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6_NovomestoDobova_33.addFeatures(features_6_NovomestoDobova_33);
var lyr_6_NovomestoDobova_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6_NovomestoDobova_33, 
                style: style_6_NovomestoDobova_33,
                interactive: false,
                title: '<img src="styles/legend/6_NovomestoDobova_33.png" /> 6_Novo mesto-Dobova'
            });
var format_5_VelenjeDravograd_34 = new ol.format.GeoJSON();
var features_5_VelenjeDravograd_34 = format_5_VelenjeDravograd_34.readFeatures(json_5_VelenjeDravograd_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5_VelenjeDravograd_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5_VelenjeDravograd_34.addFeatures(features_5_VelenjeDravograd_34);
var lyr_5_VelenjeDravograd_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5_VelenjeDravograd_34, 
                style: style_5_VelenjeDravograd_34,
                interactive: false,
                title: '<img src="styles/legend/5_VelenjeDravograd_34.png" /> 5_Velenje–Dravograd'
            });
var format_3_LjubljanaAjdovinaGoricaVariantaB_35 = new ol.format.GeoJSON();
var features_3_LjubljanaAjdovinaGoricaVariantaB_35 = format_3_LjubljanaAjdovinaGoricaVariantaB_35.readFeatures(json_3_LjubljanaAjdovinaGoricaVariantaB_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_LjubljanaAjdovinaGoricaVariantaB_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_LjubljanaAjdovinaGoricaVariantaB_35.addFeatures(features_3_LjubljanaAjdovinaGoricaVariantaB_35);
var lyr_3_LjubljanaAjdovinaGoricaVariantaB_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3_LjubljanaAjdovinaGoricaVariantaB_35, 
                style: style_3_LjubljanaAjdovinaGoricaVariantaB_35,
                interactive: false,
                title: '<img src="styles/legend/3_LjubljanaAjdovinaGoricaVariantaB_35.png" /> 3_Ljubljana-Ajdovščina-Gorica Varianta B'
            });
var format_2_LjubljanaDivaavariantaA_36 = new ol.format.GeoJSON();
var features_2_LjubljanaDivaavariantaA_36 = format_2_LjubljanaDivaavariantaA_36.readFeatures(json_2_LjubljanaDivaavariantaA_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_LjubljanaDivaavariantaA_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_LjubljanaDivaavariantaA_36.addFeatures(features_2_LjubljanaDivaavariantaA_36);
var lyr_2_LjubljanaDivaavariantaA_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_LjubljanaDivaavariantaA_36, 
                style: style_2_LjubljanaDivaavariantaA_36,
                interactive: false,
                title: '<img src="styles/legend/2_LjubljanaDivaavariantaA_36.png" /> 2_Ljubljana-Divača varianta A'
            });
var format_1_empeterPragerskovariantaE_37 = new ol.format.GeoJSON();
var features_1_empeterPragerskovariantaE_37 = format_1_empeterPragerskovariantaE_37.readFeatures(json_1_empeterPragerskovariantaE_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_empeterPragerskovariantaE_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_empeterPragerskovariantaE_37.addFeatures(features_1_empeterPragerskovariantaE_37);
var lyr_1_empeterPragerskovariantaE_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_empeterPragerskovariantaE_37, 
                style: style_1_empeterPragerskovariantaE_37,
                interactive: false,
                title: '<img src="styles/legend/1_empeterPragerskovariantaE_37.png" /> 1_Šempeter-Pragersko varianta E'
            });
var format_1_CeljepostajaVariantaF_38 = new ol.format.GeoJSON();
var features_1_CeljepostajaVariantaF_38 = format_1_CeljepostajaVariantaF_38.readFeatures(json_1_CeljepostajaVariantaF_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_CeljepostajaVariantaF_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_CeljepostajaVariantaF_38.addFeatures(features_1_CeljepostajaVariantaF_38);
var lyr_1_CeljepostajaVariantaF_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_CeljepostajaVariantaF_38, 
                style: style_1_CeljepostajaVariantaF_38,
                interactive: false,
                title: '<img src="styles/legend/1_CeljepostajaVariantaF_38.png" /> 1_Celje postaja Varianta F'
            });
var format_1_LevecCeljeVariantaF_39 = new ol.format.GeoJSON();
var features_1_LevecCeljeVariantaF_39 = format_1_LevecCeljeVariantaF_39.readFeatures(json_1_LevecCeljeVariantaF_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_LevecCeljeVariantaF_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_LevecCeljeVariantaF_39.addFeatures(features_1_LevecCeljeVariantaF_39);
var lyr_1_LevecCeljeVariantaF_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_LevecCeljeVariantaF_39, 
                style: style_1_LevecCeljeVariantaF_39,
                interactive: false,
                title: '<img src="styles/legend/1_LevecCeljeVariantaF_39.png" /> 1_Levec-Celje Varianta F'
            });
var format_1_LjubljanaCeljeVariantaA1_40 = new ol.format.GeoJSON();
var features_1_LjubljanaCeljeVariantaA1_40 = format_1_LjubljanaCeljeVariantaA1_40.readFeatures(json_1_LjubljanaCeljeVariantaA1_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_LjubljanaCeljeVariantaA1_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_LjubljanaCeljeVariantaA1_40.addFeatures(features_1_LjubljanaCeljeVariantaA1_40);
var lyr_1_LjubljanaCeljeVariantaA1_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_LjubljanaCeljeVariantaA1_40, 
                style: style_1_LjubljanaCeljeVariantaA1_40,
                interactive: false,
                title: '<img src="styles/legend/1_LjubljanaCeljeVariantaA1_40.png" /> 1_Ljubljana-Celje Varianta A1'
            });
var format_1_ZagorjeempeterVariantaC2_41 = new ol.format.GeoJSON();
var features_1_ZagorjeempeterVariantaC2_41 = format_1_ZagorjeempeterVariantaC2_41.readFeatures(json_1_ZagorjeempeterVariantaC2_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_ZagorjeempeterVariantaC2_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_ZagorjeempeterVariantaC2_41.addFeatures(features_1_ZagorjeempeterVariantaC2_41);
var lyr_1_ZagorjeempeterVariantaC2_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_ZagorjeempeterVariantaC2_41, 
                style: style_1_ZagorjeempeterVariantaC2_41,
                interactive: false,
                title: '<img src="styles/legend/1_ZagorjeempeterVariantaC2_41.png" /> 1_Zagorje-Šempeter Varianta C2'
            });
var format_Fraport_proge_42 = new ol.format.GeoJSON();
var features_Fraport_proge_42 = format_Fraport_proge_42.readFeatures(json_Fraport_proge_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fraport_proge_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fraport_proge_42.addFeatures(features_Fraport_proge_42);
var lyr_Fraport_proge_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fraport_proge_42, 
                style: style_Fraport_proge_42,
                interactive: false,
                title: '<img src="styles/legend/Fraport_proge_42.png" /> Fraport_proge'
            });
var format_Gorenjska_43 = new ol.format.GeoJSON();
var features_Gorenjska_43 = format_Gorenjska_43.readFeatures(json_Gorenjska_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorenjska_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorenjska_43.addFeatures(features_Gorenjska_43);
var lyr_Gorenjska_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gorenjska_43, 
                style: style_Gorenjska_43,
                interactive: false,
                title: '<img src="styles/legend/Gorenjska_43.png" /> Gorenjska'
            });
var group_Vizija = new ol.layer.Group({
                                layers: [lyr_12_MariborMurskaSobotaVariantaA_29,lyr_11_MariborZagreb_30,lyr_9_LesceBledJezeroVariantaA_31,lyr_7_BeltinciLendava_32,lyr_6_NovomestoDobova_33,lyr_5_VelenjeDravograd_34,lyr_3_LjubljanaAjdovinaGoricaVariantaB_35,lyr_2_LjubljanaDivaavariantaA_36,lyr_1_empeterPragerskovariantaE_37,lyr_1_CeljepostajaVariantaF_38,lyr_1_LevecCeljeVariantaF_39,lyr_1_LjubljanaCeljeVariantaA1_40,lyr_1_ZagorjeempeterVariantaC2_41,],
                                title: "Vizija"});
var group_AdriaA = new ol.layer.Group({
                                layers: [lyr_2_DivaaTrstVariantaC_25,lyr_10_TrstKoperPiranVariantaB1_26,lyr_10_TrstKoperPiranVariantaA_27,lyr_Divaa_Tri_28,],
                                title: "Adria-A"});
var group_VZP = new ol.layer.Group({
                                layers: [lyr_VZP_LjubljanaZidaniMost_23,lyr_LjubljanaDivaa_24,],
                                title: "VZP"});
var group_RegioLUR = new ol.layer.Group({
                                layers: [lyr_R2_Dolenjskaproga_19,lyr_R2_DomaleKranjZlatoPolje_20,lyr_R2_MosteDomale_21,lyr_R2_Zahodnaobvoznaproga_22,],
                                title: "Regio-LUR"});
var group_PI = new ol.layer.Group({
                                layers: [lyr_1_GrobelnoPragerskoVariantaD_16,lyr_PIKresniceZagorje_17,lyr_PIZagorjeCelje_18,],
                                title: "PI"});
var group_8_LV = new ol.layer.Group({
                                layers: [lyr_8_LVVariantaDPredorZalogBrezovica_12,lyr_8_LVVariantaCOptimiziranipredoriLV4_13,lyr_8_LVVariantaBVzhodnojunaobvoznica_14,lyr_8_LVVariantaASevernozahodnaobvoznica_15,],
                                title: "8_LŽV"});
var group_Okoljeinprostor = new ol.layer.Group({
                                layers: [lyr_03_Kulturna_dediscina_8,lyr_04_Natura_2000_D96_9,lyr_14_VVO_dravni_nivo_10,lyr_15_VVO_obcinski_nivo_11,],
                                title: "Okolje in prostor"});
var group_Obstojeeomreje = new ol.layer.Group({
                                layers: [lyr_Obstojeeproge_5,lyr_Obstojeepostaje_6,lyr_2_DivaaKoper_7,],
                                title: "Obstoječe omrežje"});
var group_Podloge = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_Esritopo_1,lyr_Esrisatelit_2,lyr_Carto_light_nolabels_3,lyr_Drave_4,],
                                title: "Podloge"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Esritopo_1.setVisible(true);lyr_Esrisatelit_2.setVisible(true);lyr_Carto_light_nolabels_3.setVisible(true);lyr_Drave_4.setVisible(true);lyr_Obstojeeproge_5.setVisible(true);lyr_Obstojeepostaje_6.setVisible(true);lyr_2_DivaaKoper_7.setVisible(true);lyr_03_Kulturna_dediscina_8.setVisible(false);lyr_04_Natura_2000_D96_9.setVisible(false);lyr_14_VVO_dravni_nivo_10.setVisible(false);lyr_15_VVO_obcinski_nivo_11.setVisible(false);lyr_8_LVVariantaDPredorZalogBrezovica_12.setVisible(true);lyr_8_LVVariantaCOptimiziranipredoriLV4_13.setVisible(true);lyr_8_LVVariantaBVzhodnojunaobvoznica_14.setVisible(true);lyr_8_LVVariantaASevernozahodnaobvoznica_15.setVisible(true);lyr_1_GrobelnoPragerskoVariantaD_16.setVisible(true);lyr_PIKresniceZagorje_17.setVisible(true);lyr_PIZagorjeCelje_18.setVisible(true);lyr_R2_Dolenjskaproga_19.setVisible(true);lyr_R2_DomaleKranjZlatoPolje_20.setVisible(true);lyr_R2_MosteDomale_21.setVisible(true);lyr_R2_Zahodnaobvoznaproga_22.setVisible(true);lyr_VZP_LjubljanaZidaniMost_23.setVisible(true);lyr_LjubljanaDivaa_24.setVisible(true);lyr_2_DivaaTrstVariantaC_25.setVisible(true);lyr_10_TrstKoperPiranVariantaB1_26.setVisible(true);lyr_10_TrstKoperPiranVariantaA_27.setVisible(true);lyr_Divaa_Tri_28.setVisible(true);lyr_12_MariborMurskaSobotaVariantaA_29.setVisible(true);lyr_11_MariborZagreb_30.setVisible(true);lyr_9_LesceBledJezeroVariantaA_31.setVisible(true);lyr_7_BeltinciLendava_32.setVisible(true);lyr_6_NovomestoDobova_33.setVisible(true);lyr_5_VelenjeDravograd_34.setVisible(true);lyr_3_LjubljanaAjdovinaGoricaVariantaB_35.setVisible(true);lyr_2_LjubljanaDivaavariantaA_36.setVisible(true);lyr_1_empeterPragerskovariantaE_37.setVisible(true);lyr_1_CeljepostajaVariantaF_38.setVisible(true);lyr_1_LevecCeljeVariantaF_39.setVisible(true);lyr_1_LjubljanaCeljeVariantaA1_40.setVisible(true);lyr_1_ZagorjeempeterVariantaC2_41.setVisible(true);lyr_Fraport_proge_42.setVisible(true);lyr_Gorenjska_43.setVisible(true);
var layersList = [group_Podloge,group_Obstojeeomreje,group_Okoljeinprostor,group_8_LV,group_PI,group_RegioLUR,group_VZP,group_AdriaA,group_Vizija,lyr_Fraport_proge_42,lyr_Gorenjska_43];
lyr_Drave_4.set('fieldAliases', {'FID_3': 'FID_3', 'NUTS_3': 'NUTS_3', 'NAME_NUTS3': 'NAME_NUTS3', 'FID_2': 'FID_2', 'NUTS_2': 'NUTS_2', 'NAME_NUTS2': 'NAME_NUTS2', 'FID_1': 'FID_1', 'NUTS_1': 'NUTS_1', 'NAME_NUTS1': 'NAME_NUTS1', 'FID_0': 'FID_0', 'NUTS_0': 'NUTS_0', 'NAME_NUTS0': 'NAME_NUTS0', 'orig_pov': 'orig_pov', });
lyr_Obstojeeproge_5.set('fieldAliases', {'qc_id': 'qc_id', 'sž_ime_p~': 'sž_ime_p~', 'sž_kateg~': 'sž_kateg~', 'sž_števi': 'sž_števi', });
lyr_Obstojeepostaje_6.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'name': 'name', });
lyr_2_DivaaKoper_7.set('fieldAliases', {'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_03_Kulturna_dediscina_8.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_04_Natura_2000_D96_9.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', });
lyr_14_VVO_dravni_nivo_10.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_15_VVO_obcinski_nivo_11.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_8_LVVariantaDPredorZalogBrezovica_12.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_8_LVVariantaCOptimiziranipredoriLV4_13.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_8_LVVariantaBVzhodnojunaobvoznica_14.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_8_LVVariantaASevernozahodnaobvoznica_15.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_GrobelnoPragerskoVariantaD_16.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_PIKresniceZagorje_17.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_PIZagorjeCelje_18.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_R2_Dolenjskaproga_19.set('fieldAliases', {'id': 'id', });
lyr_R2_DomaleKranjZlatoPolje_20.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_R2_MosteDomale_21.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'r_no': 'r_no', });
lyr_R2_Zahodnaobvoznaproga_22.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_VZP_LjubljanaZidaniMost_23.set('fieldAliases', {'VZP2_ID': 'VZP2_ID', });
lyr_LjubljanaDivaa_24.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_2_DivaaTrstVariantaC_25.set('fieldAliases', {'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_10_TrstKoperPiranVariantaB1_26.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_10_TrstKoperPiranVariantaA_27.set('fieldAliases', {'qc_id': 'qc_id', 'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_Divaa_Tri_28.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_12_MariborMurskaSobotaVariantaA_29.set('fieldAliases', {'qc_id': 'qc_id', 'tip odseka': 'tip odseka', 'length': 'length', });
lyr_11_MariborZagreb_30.set('fieldAliases', {'qc_id': 'qc_id', 'descriptio': 'descriptio', 'length': 'length', });
lyr_9_LesceBledJezeroVariantaA_31.set('fieldAliases', {'qc_id': 'qc_id', 'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_7_BeltinciLendava_32.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_6_NovomestoDobova_33.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_5_VelenjeDravograd_34.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_3_LjubljanaAjdovinaGoricaVariantaB_35.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_2_LjubljanaDivaavariantaA_36.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_empeterPragerskovariantaE_37.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_CeljepostajaVariantaF_38.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_LevecCeljeVariantaF_39.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_LjubljanaCeljeVariantaA1_40.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_1_ZagorjeempeterVariantaC2_41.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Fraport_proge_42.set('fieldAliases', {'FID': 'FID', });
lyr_Gorenjska_43.set('fieldAliases', {'NO': 'NO', });
lyr_Drave_4.set('fieldImages', {'FID_3': 'Range', 'NUTS_3': 'TextEdit', 'NAME_NUTS3': 'TextEdit', 'FID_2': 'Range', 'NUTS_2': 'TextEdit', 'NAME_NUTS2': 'TextEdit', 'FID_1': 'Range', 'NUTS_1': 'TextEdit', 'NAME_NUTS1': 'TextEdit', 'FID_0': 'TextEdit', 'NUTS_0': 'TextEdit', 'NAME_NUTS0': 'TextEdit', 'orig_pov': 'TextEdit', });
lyr_Obstojeeproge_5.set('fieldImages', {'qc_id': 'TextEdit', 'sž_ime_p~': 'TextEdit', 'sž_kateg~': 'TextEdit', 'sž_števi': 'TextEdit', });
lyr_Obstojeepostaje_6.set('fieldImages', {'qc_id': 'TextEdit', 'no': 'TextEdit', 'name': 'TextEdit', });
lyr_2_DivaaKoper_7.set('fieldImages', {'Tipodseka': 'TextEdit', 'Length': 'TextEdit', });
lyr_03_Kulturna_dediscina_8.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_04_Natura_2000_D96_9.set('fieldImages', {'qc_id': 'TextEdit', 'objectid': 'TextEdit', });
lyr_14_VVO_dravni_nivo_10.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_15_VVO_obcinski_nivo_11.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_8_LVVariantaDPredorZalogBrezovica_12.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_8_LVVariantaCOptimiziranipredoriLV4_13.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_8_LVVariantaBVzhodnojunaobvoznica_14.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'Range', });
lyr_8_LVVariantaASevernozahodnaobvoznica_15.set('fieldImages', {'tipodseka': '', 'length': 'TextEdit', });
lyr_1_GrobelnoPragerskoVariantaD_16.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_PIKresniceZagorje_17.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_PIZagorjeCelje_18.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_R2_Dolenjskaproga_19.set('fieldImages', {'id': '', });
lyr_R2_DomaleKranjZlatoPolje_20.set('fieldImages', {'qc_id': '', });
lyr_R2_MosteDomale_21.set('fieldImages', {'qc_id': '', 'no': '', 'r_no': '', });
lyr_R2_Zahodnaobvoznaproga_22.set('fieldImages', {'qc_id': '', });
lyr_VZP_LjubljanaZidaniMost_23.set('fieldImages', {'VZP2_ID': '', });
lyr_LjubljanaDivaa_24.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_2_DivaaTrstVariantaC_25.set('fieldImages', {'Tipodseka': '', 'Length': '', });
lyr_10_TrstKoperPiranVariantaB1_26.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_10_TrstKoperPiranVariantaA_27.set('fieldImages', {'qc_id': '', 'Tipodseka': '', 'Length': '', });
lyr_Divaa_Tri_28.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_12_MariborMurskaSobotaVariantaA_29.set('fieldImages', {'qc_id': '', 'tip odseka': '', 'length': '', });
lyr_11_MariborZagreb_30.set('fieldImages', {'qc_id': '', 'descriptio': 'TextEdit', 'length': '', });
lyr_9_LesceBledJezeroVariantaA_31.set('fieldImages', {'qc_id': 'TextEdit', 'Tipodseka': '', 'Length': '', });
lyr_7_BeltinciLendava_32.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_6_NovomestoDobova_33.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_5_VelenjeDravograd_34.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_3_LjubljanaAjdovinaGoricaVariantaB_35.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_2_LjubljanaDivaavariantaA_36.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_1_empeterPragerskovariantaE_37.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_1_CeljepostajaVariantaF_38.set('fieldImages', {'qc_id_0': '', 'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_1_LevecCeljeVariantaF_39.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_1_LjubljanaCeljeVariantaA1_40.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_1_ZagorjeempeterVariantaC2_41.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Fraport_proge_42.set('fieldImages', {'FID': '', });
lyr_Gorenjska_43.set('fieldImages', {'NO': '', });
lyr_Drave_4.set('fieldLabels', {});
lyr_Obstojeeproge_5.set('fieldLabels', {});
lyr_Obstojeepostaje_6.set('fieldLabels', {});
lyr_2_DivaaKoper_7.set('fieldLabels', {});
lyr_03_Kulturna_dediscina_8.set('fieldLabels', {});
lyr_04_Natura_2000_D96_9.set('fieldLabels', {});
lyr_14_VVO_dravni_nivo_10.set('fieldLabels', {});
lyr_15_VVO_obcinski_nivo_11.set('fieldLabels', {});
lyr_8_LVVariantaDPredorZalogBrezovica_12.set('fieldLabels', {});
lyr_8_LVVariantaCOptimiziranipredoriLV4_13.set('fieldLabels', {});
lyr_8_LVVariantaBVzhodnojunaobvoznica_14.set('fieldLabels', {});
lyr_8_LVVariantaASevernozahodnaobvoznica_15.set('fieldLabels', {});
lyr_1_GrobelnoPragerskoVariantaD_16.set('fieldLabels', {});
lyr_PIKresniceZagorje_17.set('fieldLabels', {});
lyr_PIZagorjeCelje_18.set('fieldLabels', {});
lyr_R2_Dolenjskaproga_19.set('fieldLabels', {});
lyr_R2_DomaleKranjZlatoPolje_20.set('fieldLabels', {});
lyr_R2_MosteDomale_21.set('fieldLabels', {});
lyr_R2_Zahodnaobvoznaproga_22.set('fieldLabels', {});
lyr_VZP_LjubljanaZidaniMost_23.set('fieldLabels', {});
lyr_LjubljanaDivaa_24.set('fieldLabels', {});
lyr_2_DivaaTrstVariantaC_25.set('fieldLabels', {});
lyr_10_TrstKoperPiranVariantaB1_26.set('fieldLabels', {});
lyr_10_TrstKoperPiranVariantaA_27.set('fieldLabels', {});
lyr_Divaa_Tri_28.set('fieldLabels', {});
lyr_12_MariborMurskaSobotaVariantaA_29.set('fieldLabels', {});
lyr_11_MariborZagreb_30.set('fieldLabels', {});
lyr_9_LesceBledJezeroVariantaA_31.set('fieldLabels', {});
lyr_7_BeltinciLendava_32.set('fieldLabels', {});
lyr_6_NovomestoDobova_33.set('fieldLabels', {});
lyr_5_VelenjeDravograd_34.set('fieldLabels', {});
lyr_3_LjubljanaAjdovinaGoricaVariantaB_35.set('fieldLabels', {});
lyr_2_LjubljanaDivaavariantaA_36.set('fieldLabels', {});
lyr_1_empeterPragerskovariantaE_37.set('fieldLabels', {});
lyr_1_CeljepostajaVariantaF_38.set('fieldLabels', {});
lyr_1_LevecCeljeVariantaF_39.set('fieldLabels', {});
lyr_1_LjubljanaCeljeVariantaA1_40.set('fieldLabels', {});
lyr_1_ZagorjeempeterVariantaC2_41.set('fieldLabels', {});
lyr_Fraport_proge_42.set('fieldLabels', {'FID': 'no label', });
lyr_Gorenjska_43.set('fieldLabels', {'NO': 'no label', });
lyr_Gorenjska_43.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});