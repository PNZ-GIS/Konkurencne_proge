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
var format_Kulturna_dediscina_12 = new ol.format.GeoJSON();
var features_Kulturna_dediscina_12 = format_Kulturna_dediscina_12.readFeatures(json_Kulturna_dediscina_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kulturna_dediscina_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kulturna_dediscina_12.addFeatures(features_Kulturna_dediscina_12);
var lyr_Kulturna_dediscina_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kulturna_dediscina_12, 
                style: style_Kulturna_dediscina_12,
                interactive: false,
                title: '<img src="styles/legend/Kulturna_dediscina_12.png" /> Kulturna_dediscina'
            });
var format_Natura_2000_13 = new ol.format.GeoJSON();
var features_Natura_2000_13 = format_Natura_2000_13.readFeatures(json_Natura_2000_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Natura_2000_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Natura_2000_13.addFeatures(features_Natura_2000_13);
var lyr_Natura_2000_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Natura_2000_13, 
                style: style_Natura_2000_13,
                interactive: false,
                title: '<img src="styles/legend/Natura_2000_13.png" /> Natura_2000'
            });
var format_VVO_dravni_nivo_14 = new ol.format.GeoJSON();
var features_VVO_dravni_nivo_14 = format_VVO_dravni_nivo_14.readFeatures(json_VVO_dravni_nivo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VVO_dravni_nivo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VVO_dravni_nivo_14.addFeatures(features_VVO_dravni_nivo_14);
var lyr_VVO_dravni_nivo_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VVO_dravni_nivo_14, 
                style: style_VVO_dravni_nivo_14,
                interactive: false,
                title: '<img src="styles/legend/VVO_dravni_nivo_14.png" /> VVO_državni_nivo'
            });
var format_VVO_obcinski_nivo_15 = new ol.format.GeoJSON();
var features_VVO_obcinski_nivo_15 = format_VVO_obcinski_nivo_15.readFeatures(json_VVO_obcinski_nivo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VVO_obcinski_nivo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VVO_obcinski_nivo_15.addFeatures(features_VVO_obcinski_nivo_15);
var lyr_VVO_obcinski_nivo_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VVO_obcinski_nivo_15, 
                style: style_VVO_obcinski_nivo_15,
                interactive: false,
                title: '<img src="styles/legend/VVO_obcinski_nivo_15.png" /> VVO_obcinski_nivo'
            });
var format_GrobelnoPragersko_16 = new ol.format.GeoJSON();
var features_GrobelnoPragersko_16 = format_GrobelnoPragersko_16.readFeatures(json_GrobelnoPragersko_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrobelnoPragersko_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrobelnoPragersko_16.addFeatures(features_GrobelnoPragersko_16);
var lyr_GrobelnoPragersko_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GrobelnoPragersko_16, 
                style: style_GrobelnoPragersko_16,
                interactive: false,
                title: '<img src="styles/legend/GrobelnoPragersko_16.png" /> Grobelno-Pragersko '
            });
var format_KresniceZagorje_17 = new ol.format.GeoJSON();
var features_KresniceZagorje_17 = format_KresniceZagorje_17.readFeatures(json_KresniceZagorje_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KresniceZagorje_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KresniceZagorje_17.addFeatures(features_KresniceZagorje_17);
var lyr_KresniceZagorje_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KresniceZagorje_17, 
                style: style_KresniceZagorje_17,
                interactive: false,
                title: '<img src="styles/legend/KresniceZagorje_17.png" /> Kresnice-Zagorje'
            });
var format_ZagorjeCelje_18 = new ol.format.GeoJSON();
var features_ZagorjeCelje_18 = format_ZagorjeCelje_18.readFeatures(json_ZagorjeCelje_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZagorjeCelje_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZagorjeCelje_18.addFeatures(features_ZagorjeCelje_18);
var lyr_ZagorjeCelje_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZagorjeCelje_18, 
                style: style_ZagorjeCelje_18,
                interactive: false,
                title: '<img src="styles/legend/ZagorjeCelje_18.png" /> Zagorje-Celje'
            });
var format_Dolenjskaproga_19 = new ol.format.GeoJSON();
var features_Dolenjskaproga_19 = format_Dolenjskaproga_19.readFeatures(json_Dolenjskaproga_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dolenjskaproga_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dolenjskaproga_19.addFeatures(features_Dolenjskaproga_19);
var lyr_Dolenjskaproga_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dolenjskaproga_19, 
                style: style_Dolenjskaproga_19,
                interactive: false,
                title: '<img src="styles/legend/Dolenjskaproga_19.png" /> Dolenjska proga'
            });
var format_DomaleKranjZlatoPolje_20 = new ol.format.GeoJSON();
var features_DomaleKranjZlatoPolje_20 = format_DomaleKranjZlatoPolje_20.readFeatures(json_DomaleKranjZlatoPolje_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DomaleKranjZlatoPolje_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DomaleKranjZlatoPolje_20.addFeatures(features_DomaleKranjZlatoPolje_20);
var lyr_DomaleKranjZlatoPolje_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DomaleKranjZlatoPolje_20, 
                style: style_DomaleKranjZlatoPolje_20,
                interactive: false,
                title: '<img src="styles/legend/DomaleKranjZlatoPolje_20.png" /> Domžale-Kranj Zlato Polje'
            });
var format_MosteDomale_21 = new ol.format.GeoJSON();
var features_MosteDomale_21 = format_MosteDomale_21.readFeatures(json_MosteDomale_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MosteDomale_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MosteDomale_21.addFeatures(features_MosteDomale_21);
var lyr_MosteDomale_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MosteDomale_21, 
                style: style_MosteDomale_21,
                interactive: false,
                title: '<img src="styles/legend/MosteDomale_21.png" /> Moste-Domžale'
            });
var format_Zahodnaobvoznaproga_22 = new ol.format.GeoJSON();
var features_Zahodnaobvoznaproga_22 = format_Zahodnaobvoznaproga_22.readFeatures(json_Zahodnaobvoznaproga_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zahodnaobvoznaproga_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zahodnaobvoznaproga_22.addFeatures(features_Zahodnaobvoznaproga_22);
var lyr_Zahodnaobvoznaproga_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zahodnaobvoznaproga_22, 
                style: style_Zahodnaobvoznaproga_22,
                interactive: false,
                title: '<img src="styles/legend/Zahodnaobvoznaproga_22.png" /> Zahodna obvozna proga'
            });
var format_Kamnikaproga_23 = new ol.format.GeoJSON();
var features_Kamnikaproga_23 = format_Kamnikaproga_23.readFeatures(json_Kamnikaproga_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kamnikaproga_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kamnikaproga_23.addFeatures(features_Kamnikaproga_23);
var lyr_Kamnikaproga_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kamnikaproga_23, 
                style: style_Kamnikaproga_23,
                interactive: false,
                title: '<img src="styles/legend/Kamnikaproga_23.png" /> Kamniška proga'
            });
var format_LjubljanaZidaniMost_24 = new ol.format.GeoJSON();
var features_LjubljanaZidaniMost_24 = format_LjubljanaZidaniMost_24.readFeatures(json_LjubljanaZidaniMost_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaZidaniMost_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaZidaniMost_24.addFeatures(features_LjubljanaZidaniMost_24);
var lyr_LjubljanaZidaniMost_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaZidaniMost_24, 
                style: style_LjubljanaZidaniMost_24,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaZidaniMost_24.png" /> Ljubljana-Zidani Most'
            });
var format_LjubljanaDivaa_25 = new ol.format.GeoJSON();
var features_LjubljanaDivaa_25 = format_LjubljanaDivaa_25.readFeatures(json_LjubljanaDivaa_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaDivaa_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaDivaa_25.addFeatures(features_LjubljanaDivaa_25);
var lyr_LjubljanaDivaa_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaDivaa_25, 
                style: style_LjubljanaDivaa_25,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaDivaa_25.png" /> Ljubljana-Divača '
            });
var format_DivaaTrst_26 = new ol.format.GeoJSON();
var features_DivaaTrst_26 = format_DivaaTrst_26.readFeatures(json_DivaaTrst_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivaaTrst_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivaaTrst_26.addFeatures(features_DivaaTrst_26);
var lyr_DivaaTrst_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivaaTrst_26, 
                style: style_DivaaTrst_26,
                interactive: false,
                title: '<img src="styles/legend/DivaaTrst_26.png" /> Divača-Trst '
            });
var format_DivaaTri_27 = new ol.format.GeoJSON();
var features_DivaaTri_27 = format_DivaaTri_27.readFeatures(json_DivaaTri_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivaaTri_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivaaTri_27.addFeatures(features_DivaaTri_27);
var lyr_DivaaTri_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivaaTri_27, 
                style: style_DivaaTri_27,
                interactive: false,
                title: '<img src="styles/legend/DivaaTri_27.png" /> Divača-Tržič '
            });
var format_MariborMurskaSobota_28 = new ol.format.GeoJSON();
var features_MariborMurskaSobota_28 = format_MariborMurskaSobota_28.readFeatures(json_MariborMurskaSobota_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MariborMurskaSobota_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MariborMurskaSobota_28.addFeatures(features_MariborMurskaSobota_28);
var lyr_MariborMurskaSobota_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MariborMurskaSobota_28, 
                style: style_MariborMurskaSobota_28,
                interactive: false,
                title: '<img src="styles/legend/MariborMurskaSobota_28.png" /> Maribor-Murska Sobota '
            });
var format_BeltinciLendava_29 = new ol.format.GeoJSON();
var features_BeltinciLendava_29 = format_BeltinciLendava_29.readFeatures(json_BeltinciLendava_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BeltinciLendava_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BeltinciLendava_29.addFeatures(features_BeltinciLendava_29);
var lyr_BeltinciLendava_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BeltinciLendava_29, 
                style: style_BeltinciLendava_29,
                interactive: false,
                title: '<img src="styles/legend/BeltinciLendava_29.png" /> Beltinci-Lendava'
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
                title: '<img src="styles/legend/LjubljanaDivaa_30.png" /> Ljubljana-Divača'
            });
var format_empeterPragersko_31 = new ol.format.GeoJSON();
var features_empeterPragersko_31 = format_empeterPragersko_31.readFeatures(json_empeterPragersko_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_empeterPragersko_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_empeterPragersko_31.addFeatures(features_empeterPragersko_31);
var lyr_empeterPragersko_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_empeterPragersko_31, 
                style: style_empeterPragersko_31,
                interactive: false,
                title: '<img src="styles/legend/empeterPragersko_31.png" /> Šempeter-Pragersko '
            });
var format_Celjepostaja_32 = new ol.format.GeoJSON();
var features_Celjepostaja_32 = format_Celjepostaja_32.readFeatures(json_Celjepostaja_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Celjepostaja_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Celjepostaja_32.addFeatures(features_Celjepostaja_32);
var lyr_Celjepostaja_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Celjepostaja_32, 
                style: style_Celjepostaja_32,
                interactive: false,
                title: '<img src="styles/legend/Celjepostaja_32.png" /> Celje postaja '
            });
var format_LevecCelje_33 = new ol.format.GeoJSON();
var features_LevecCelje_33 = format_LevecCelje_33.readFeatures(json_LevecCelje_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LevecCelje_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LevecCelje_33.addFeatures(features_LevecCelje_33);
var lyr_LevecCelje_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LevecCelje_33, 
                style: style_LevecCelje_33,
                interactive: false,
                title: '<img src="styles/legend/LevecCelje_33.png" /> Levec-Celje '
            });
var format_LjubljanaCelje_34 = new ol.format.GeoJSON();
var features_LjubljanaCelje_34 = format_LjubljanaCelje_34.readFeatures(json_LjubljanaCelje_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LjubljanaCelje_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LjubljanaCelje_34.addFeatures(features_LjubljanaCelje_34);
var lyr_LjubljanaCelje_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LjubljanaCelje_34, 
                style: style_LjubljanaCelje_34,
                interactive: false,
                title: '<img src="styles/legend/LjubljanaCelje_34.png" /> Ljubljana-Celje'
            });
var format_Zagorjeempeter_35 = new ol.format.GeoJSON();
var features_Zagorjeempeter_35 = format_Zagorjeempeter_35.readFeatures(json_Zagorjeempeter_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zagorjeempeter_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zagorjeempeter_35.addFeatures(features_Zagorjeempeter_35);
var lyr_Zagorjeempeter_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zagorjeempeter_35, 
                style: style_Zagorjeempeter_35,
                interactive: false,
                title: '<img src="styles/legend/Zagorjeempeter_35.png" /> Zagorje-Šempeter '
            });
var format_NavezavaBrnik_36 = new ol.format.GeoJSON();
var features_NavezavaBrnik_36 = format_NavezavaBrnik_36.readFeatures(json_NavezavaBrnik_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NavezavaBrnik_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NavezavaBrnik_36.addFeatures(features_NavezavaBrnik_36);
var lyr_NavezavaBrnik_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NavezavaBrnik_36, 
                style: style_NavezavaBrnik_36,
                interactive: false,
                title: '<img src="styles/legend/NavezavaBrnik_36.png" /> Navezava Brnik'
            });
var format_Gorenjskaproga_37 = new ol.format.GeoJSON();
var features_Gorenjskaproga_37 = format_Gorenjskaproga_37.readFeatures(json_Gorenjskaproga_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorenjskaproga_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorenjskaproga_37.addFeatures(features_Gorenjskaproga_37);
var lyr_Gorenjskaproga_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gorenjskaproga_37, 
                style: style_Gorenjskaproga_37,
                interactive: false,
                title: '<img src="styles/legend/Gorenjskaproga_37.png" /> Gorenjska proga'
            });
var group_Vizija = new ol.layer.Group({
                                layers: [lyr_MariborMurskaSobota_28,lyr_BeltinciLendava_29,lyr_LjubljanaDivaa_30,lyr_empeterPragersko_31,lyr_Celjepostaja_32,lyr_LevecCelje_33,lyr_LjubljanaCelje_34,lyr_Zagorjeempeter_35,],
                                title: "Vizija"});
var group_AdriaA = new ol.layer.Group({
                                layers: [lyr_DivaaTrst_26,lyr_DivaaTri_27,],
                                title: "Adria-A"});
var group_VZP = new ol.layer.Group({
                                layers: [lyr_LjubljanaZidaniMost_24,lyr_LjubljanaDivaa_25,],
                                title: "VZP"});
var group_RegioLURR2 = new ol.layer.Group({
                                layers: [lyr_Dolenjskaproga_19,lyr_DomaleKranjZlatoPolje_20,lyr_MosteDomale_21,lyr_Zahodnaobvoznaproga_22,lyr_Kamnikaproga_23,],
                                title: "Regio-LUR R2"});
var group_PISkrajevanjeasovMBLJ = new ol.layer.Group({
                                layers: [lyr_GrobelnoPragersko_16,lyr_KresniceZagorje_17,lyr_ZagorjeCelje_18,],
                                title: "PI Skrajševanje časov MB-LJ"});
var group_Okoljeinprostor = new ol.layer.Group({
                                layers: [lyr_Kulturna_dediscina_12,lyr_Natura_2000_13,lyr_VVO_dravni_nivo_14,lyr_VVO_obcinski_nivo_15,],
                                title: "Okolje in prostor"});
var group_Obstojeeomreje = new ol.layer.Group({
                                layers: [lyr_Obstojeeproge_9,lyr_Obstojeepostaje_10,lyr_DivaaKoper_11,],
                                title: "Obstoječe omrežje"});
var group_Podloge = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_4,lyr_Esritopo_5,lyr_Esrisatelit_6,lyr_Carto_light_nolabels_7,lyr_Drave_8,],
                                title: "Podloge"});
var group_LV = new ol.layer.Group({
                                layers: [lyr_PredorZalogBrezovica_0,lyr_Optimiziranipredori_1,lyr_Vzhodnojunaobvoznica_2,lyr_Severnozahodnaobvoznica_3,],
                                title: "LŽV"});

lyr_PredorZalogBrezovica_0.setVisible(true);lyr_Optimiziranipredori_1.setVisible(true);lyr_Vzhodnojunaobvoznica_2.setVisible(true);lyr_Severnozahodnaobvoznica_3.setVisible(true);lyr_OpenStreetMap_4.setVisible(true);lyr_Esritopo_5.setVisible(true);lyr_Esrisatelit_6.setVisible(true);lyr_Carto_light_nolabels_7.setVisible(true);lyr_Drave_8.setVisible(true);lyr_Obstojeeproge_9.setVisible(true);lyr_Obstojeepostaje_10.setVisible(true);lyr_DivaaKoper_11.setVisible(true);lyr_Kulturna_dediscina_12.setVisible(false);lyr_Natura_2000_13.setVisible(false);lyr_VVO_dravni_nivo_14.setVisible(false);lyr_VVO_obcinski_nivo_15.setVisible(false);lyr_GrobelnoPragersko_16.setVisible(true);lyr_KresniceZagorje_17.setVisible(true);lyr_ZagorjeCelje_18.setVisible(true);lyr_Dolenjskaproga_19.setVisible(true);lyr_DomaleKranjZlatoPolje_20.setVisible(true);lyr_MosteDomale_21.setVisible(true);lyr_Zahodnaobvoznaproga_22.setVisible(true);lyr_Kamnikaproga_23.setVisible(true);lyr_LjubljanaZidaniMost_24.setVisible(true);lyr_LjubljanaDivaa_25.setVisible(true);lyr_DivaaTrst_26.setVisible(true);lyr_DivaaTri_27.setVisible(true);lyr_MariborMurskaSobota_28.setVisible(true);lyr_BeltinciLendava_29.setVisible(true);lyr_LjubljanaDivaa_30.setVisible(true);lyr_empeterPragersko_31.setVisible(true);lyr_Celjepostaja_32.setVisible(true);lyr_LevecCelje_33.setVisible(true);lyr_LjubljanaCelje_34.setVisible(true);lyr_Zagorjeempeter_35.setVisible(true);lyr_NavezavaBrnik_36.setVisible(true);lyr_Gorenjskaproga_37.setVisible(true);
var layersList = [group_LV,group_Podloge,group_Obstojeeomreje,group_Okoljeinprostor,group_PISkrajevanjeasovMBLJ,group_RegioLURR2,group_VZP,group_AdriaA,group_Vizija,lyr_NavezavaBrnik_36,lyr_Gorenjskaproga_37];
lyr_PredorZalogBrezovica_0.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Optimiziranipredori_1.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Vzhodnojunaobvoznica_2.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Severnozahodnaobvoznica_3.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Drave_8.set('fieldAliases', {'FID_3': 'FID_3', 'NUTS_3': 'NUTS_3', 'NAME_NUTS3': 'NAME_NUTS3', 'FID_2': 'FID_2', 'NUTS_2': 'NUTS_2', 'NAME_NUTS2': 'NAME_NUTS2', 'FID_1': 'FID_1', 'NUTS_1': 'NUTS_1', 'NAME_NUTS1': 'NAME_NUTS1', 'FID_0': 'FID_0', 'NUTS_0': 'NUTS_0', 'NAME_NUTS0': 'NAME_NUTS0', 'orig_pov': 'orig_pov', });
lyr_Obstojeeproge_9.set('fieldAliases', {'qc_id': 'qc_id', 'sž_ime_p~': 'sž_ime_p~', 'sž_kateg~': 'sž_kateg~', 'sž_števi': 'sž_števi', });
lyr_Obstojeepostaje_10.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'name': 'name', });
lyr_DivaaKoper_11.set('fieldAliases', {'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_Kulturna_dediscina_12.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_Natura_2000_13.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', });
lyr_VVO_dravni_nivo_14.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_VVO_obcinski_nivo_15.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', });
lyr_GrobelnoPragersko_16.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_KresniceZagorje_17.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_ZagorjeCelje_18.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Dolenjskaproga_19.set('fieldAliases', {'id': 'id', });
lyr_DomaleKranjZlatoPolje_20.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_MosteDomale_21.set('fieldAliases', {'qc_id': 'qc_id', 'no': 'no', 'r_no': 'r_no', });
lyr_Zahodnaobvoznaproga_22.set('fieldAliases', {'qc_id': 'qc_id', });
lyr_Kamnikaproga_23.set('fieldAliases', {'id': 'id', });
lyr_LjubljanaZidaniMost_24.set('fieldAliases', {'VZP2_ID': 'VZP2_ID', });
lyr_LjubljanaDivaa_25.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_DivaaTrst_26.set('fieldAliases', {'Tipodseka': 'Tipodseka', 'Length': 'Length', });
lyr_DivaaTri_27.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_MariborMurskaSobota_28.set('fieldAliases', {'qc_id': 'qc_id', 'tip odseka': 'tip odseka', 'length': 'length', });
lyr_BeltinciLendava_29.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LjubljanaDivaa_30.set('fieldAliases', {'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_empeterPragersko_31.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Celjepostaja_32.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LevecCelje_33.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_LjubljanaCelje_34.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_Zagorjeempeter_35.set('fieldAliases', {'tipodseka': 'tipodseka', 'length': 'length', });
lyr_NavezavaBrnik_36.set('fieldAliases', {'FID': 'FID', });
lyr_Gorenjskaproga_37.set('fieldAliases', {'NO': 'NO', });
lyr_PredorZalogBrezovica_0.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Optimiziranipredori_1.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Vzhodnojunaobvoznica_2.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'Range', });
lyr_Severnozahodnaobvoznica_3.set('fieldImages', {'tipodseka': '', 'length': 'TextEdit', });
lyr_Drave_8.set('fieldImages', {'FID_3': 'Range', 'NUTS_3': 'TextEdit', 'NAME_NUTS3': 'TextEdit', 'FID_2': 'Range', 'NUTS_2': 'TextEdit', 'NAME_NUTS2': 'TextEdit', 'FID_1': 'Range', 'NUTS_1': 'TextEdit', 'NAME_NUTS1': 'TextEdit', 'FID_0': 'TextEdit', 'NUTS_0': 'TextEdit', 'NAME_NUTS0': 'TextEdit', 'orig_pov': 'TextEdit', });
lyr_Obstojeeproge_9.set('fieldImages', {'qc_id': 'TextEdit', 'sž_ime_p~': 'TextEdit', 'sž_kateg~': 'TextEdit', 'sž_števi': 'TextEdit', });
lyr_Obstojeepostaje_10.set('fieldImages', {'qc_id': 'TextEdit', 'no': 'TextEdit', 'name': 'TextEdit', });
lyr_DivaaKoper_11.set('fieldImages', {'Tipodseka': 'TextEdit', 'Length': 'TextEdit', });
lyr_Kulturna_dediscina_12.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_Natura_2000_13.set('fieldImages', {'qc_id': 'TextEdit', 'objectid': 'TextEdit', });
lyr_VVO_dravni_nivo_14.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_VVO_obcinski_nivo_15.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', });
lyr_GrobelnoPragersko_16.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_KresniceZagorje_17.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_ZagorjeCelje_18.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Dolenjskaproga_19.set('fieldImages', {'id': '', });
lyr_DomaleKranjZlatoPolje_20.set('fieldImages', {'qc_id': '', });
lyr_MosteDomale_21.set('fieldImages', {'qc_id': '', 'no': '', 'r_no': '', });
lyr_Zahodnaobvoznaproga_22.set('fieldImages', {'qc_id': '', });
lyr_Kamnikaproga_23.set('fieldImages', {'id': '', });
lyr_LjubljanaZidaniMost_24.set('fieldImages', {'VZP2_ID': '', });
lyr_LjubljanaDivaa_25.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_DivaaTrst_26.set('fieldImages', {'Tipodseka': '', 'Length': '', });
lyr_DivaaTri_27.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_MariborMurskaSobota_28.set('fieldImages', {'qc_id': '', 'tip odseka': '', 'length': '', });
lyr_BeltinciLendava_29.set('fieldImages', {'qc_id': '', 'tipodseka': '', 'length': '', });
lyr_LjubljanaDivaa_30.set('fieldImages', {'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_empeterPragersko_31.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Celjepostaja_32.set('fieldImages', {'qc_id_0': '', 'qc_id': '', 'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_LevecCelje_33.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_LjubljanaCelje_34.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_Zagorjeempeter_35.set('fieldImages', {'tipodseka': 'TextEdit', 'length': 'TextEdit', });
lyr_NavezavaBrnik_36.set('fieldImages', {'FID': '', });
lyr_Gorenjskaproga_37.set('fieldImages', {'NO': '', });
lyr_PredorZalogBrezovica_0.set('fieldLabels', {});
lyr_Optimiziranipredori_1.set('fieldLabels', {});
lyr_Vzhodnojunaobvoznica_2.set('fieldLabels', {});
lyr_Severnozahodnaobvoznica_3.set('fieldLabels', {});
lyr_Drave_8.set('fieldLabels', {});
lyr_Obstojeeproge_9.set('fieldLabels', {});
lyr_Obstojeepostaje_10.set('fieldLabels', {});
lyr_DivaaKoper_11.set('fieldLabels', {});
lyr_Kulturna_dediscina_12.set('fieldLabels', {});
lyr_Natura_2000_13.set('fieldLabels', {});
lyr_VVO_dravni_nivo_14.set('fieldLabels', {});
lyr_VVO_obcinski_nivo_15.set('fieldLabels', {});
lyr_GrobelnoPragersko_16.set('fieldLabels', {});
lyr_KresniceZagorje_17.set('fieldLabels', {});
lyr_ZagorjeCelje_18.set('fieldLabels', {});
lyr_Dolenjskaproga_19.set('fieldLabels', {});
lyr_DomaleKranjZlatoPolje_20.set('fieldLabels', {});
lyr_MosteDomale_21.set('fieldLabels', {});
lyr_Zahodnaobvoznaproga_22.set('fieldLabels', {});
lyr_Kamnikaproga_23.set('fieldLabels', {});
lyr_LjubljanaZidaniMost_24.set('fieldLabels', {});
lyr_LjubljanaDivaa_25.set('fieldLabels', {});
lyr_DivaaTrst_26.set('fieldLabels', {});
lyr_DivaaTri_27.set('fieldLabels', {});
lyr_MariborMurskaSobota_28.set('fieldLabels', {});
lyr_BeltinciLendava_29.set('fieldLabels', {});
lyr_LjubljanaDivaa_30.set('fieldLabels', {});
lyr_empeterPragersko_31.set('fieldLabels', {});
lyr_Celjepostaja_32.set('fieldLabels', {});
lyr_LevecCelje_33.set('fieldLabels', {});
lyr_LjubljanaCelje_34.set('fieldLabels', {});
lyr_Zagorjeempeter_35.set('fieldLabels', {});
lyr_NavezavaBrnik_36.set('fieldLabels', {'FID': 'no label', });
lyr_Gorenjskaproga_37.set('fieldLabels', {'NO': 'no label', });
lyr_Gorenjskaproga_37.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});