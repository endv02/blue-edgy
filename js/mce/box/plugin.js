/*
 * Shortcodes button
 */
(function () {
    tinymce.PluginManager.add('blue_edgy_mce_box', function (editor, url) {
        editor.addButton('box', {
            title: 'Hinweis einfügen',
            icon: 'icon dashicons-info',
            onclick: function () {
                editor.windowManager.open({
                    title: 'Hinweis einfügen',
                    body: [
                        {
                            type: 'textbox',
                            name: 'boxContent',
                            label: 'Inhalt',
                            value: '',
                            multiline: true,
                            minWidth: 300,
                            minHeight: 100
                        },
                        {
                            type: 'listbox',
                            name: 'boxStyle',
                            label: 'Art',
                            'values': [
                                {text: 'Info', value: 'info'},
                                {text: 'Wichtig', value: 'warning'}
                            ]
                        },
                        {
                            type: 'listbox',
                            name: 'boxWidth',
                            label: 'Größe',
                            'values': [
                                {text: 'Gesamtbreite', value: ''},
                                {text: 'Halbbreite', value: '50'},
                                {text: 'Ein drittel der Breite', value: '33'}
                            ]
                        },
                        {
                            type: 'listbox',
                            name: 'boxAlign',
                            label: 'Anpassen',
                            'values': [
                                {text: 'Standard', value: ''},
                                {text: 'Links ausrichten', value: 'left'},
                                {text: 'Rechts ausrichten', value: 'right'}
                            ]
                        }
                    ],
                    onsubmit: function (e) {
                        if(!e.data.boxContent) return;
                        var width = (e.data.boxWidth ? ' ym-g' + e.data.boxWidth : '');
                        var align = (e.data.boxAlign ? ' float-' + e.data.boxAlign : '');
                        var icon = (e.data.boxStyle == 'info' ? 'lightbulb' : 'info');
                        editor.insertContent('<p class="box ' + e.data.boxStyle + ' dashicons-before dashicons-' + icon + width + align + '">' + e.data.boxContent + '</p>');
                    }
                });
            }

        });
    });
})();