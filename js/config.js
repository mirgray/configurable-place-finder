/*global dojo */
/** @license
 | Version 10.2
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
dojo.provide("js.Config");
dojo.declare("js.Config", null, {

    // This file contains various configuration settings for "Configurable Place Finder" template
    //
    // Use this file to perform the following:
    //
    // 1.  Specify application title                  - [ Tag(s) to look for: ApplicationName ]
    // 2.  Set path for application icon              - [ Tag(s) to look for: ApplicationIcon ]
    // 3.  Set path for application favicon           - [ Tag(s) to look for: ApplicationFavicon ]
    // 4.  Set path for application theme             - [ Tag(s) to look for: ApplicationTheme ]

    // 5.  Set splash screen message                  - [ Tag(s) to look for: SplashScreen ]
    // 6.  Set URL for help page                      - [ Tag(s) to look for: HelpURL ]

    // 7.  Specify URLs for basemaps                  - [ Tag(s) to look for: BaseMapLayers ]
    // 8.  Set initial map extent                     - [ Tag(s) to look for: DefaultExtent ]

    // 9.  Tags for using map services:
    // 9a. Specify URLs and attributes for operational layers
    //                                                - [ Tag(s) to look for: FacilityLayer, PrimaryKeyForFeatures, CommentsLayer, ForeignKeyforComments, FeatureName, ReferenceOverlayLayer ]
    // 9b. Customize info-Window settings             - [ Tag(s) to look for: InfoWindowHeader, InfoWindowContent ]
    // 9c. Customize info-Popup settings              - [ Tag(s) to look for: InfoPopupFieldsCollection, Activities ]
    // 9d. Customize info-Popup size                  - [ Tag(s) to look for: InfoPopupHeight, InfoPopupWidth ]
    // 9e. Customize data formatting                  - [ Tag(s) to look for: ShowNullValueAs, FormatDateAs ]

    // 10. Customize buffer settings                  - [ Tag(s) to look for: BufferDistance ]
    // 11. Customize directions settings              - [ Tag(s) to look for: GetDirectionsMobile, GetDirectionsDesktop, GetDirections, ApproximateValue ]

    // 12a. Customize address search settings         - [ Tag(s) to look for: DefaultLocatorSymbol, MarkupSymbolSize, Locators, LocatorDefaultAddress, LocatorParameters, LocatorURL, CandidateFields,
    //                                                                        DisplayField, AddressMatchScore, LocatorFieldName, LocatorFieldValues, CountyFields, MaxResults ]
    // 12b. Customize facility search settings        - [ Tag(s) to look for: DisplayText, LocatorDefaultFeature ]
    // 12c. Customize activity search settings        - [ Tag(s) to look for: DisplayText ]

    // 13. Customize ripple size settings             - [ Tag(s) to look for: LocatorRippleSize ]
    // 14. Customize zoom level settings              - [ Tag(s) to look for: ZoomLevel ]
    // 15. Customize database fields settings         - [ Tag(s) to look for: DatabaseFields ]
    // 16. Customize Comments infoPopup settings      - [ Tag(s) to look for: CommentsInfoPopupFieldsCollection ]
    // 17. Set URL for geometry service               - [ Tag(s) to look for: GeometryService ]

    // 18. Customize routing settings for directions  - [ Tag(s) to look for: RouteServiceURL, RouteColor, RouteWidth ]

    // 19. Configure data to be displayed on the bottom panel
    //                                                - [ Tag(s) to look for: InfoBoxWidth, Order]

    // 20. Specify URLs for map sharing               - [ Tag(s) to look for: MapSharingOptions, TinyURLServiceURL, TinyURLResponseAttribute, FacebookShareURL, TwitterShareURL, ShareByMailLink ]


    // ------------------------------------------------------------------------------------------------------------------------
    // GENERAL SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set application title
    ApplicationName: "Configurable Place Finder",

    // Set application icon path
    ApplicationIcon: "images/i_hydro.png",

    // Set application Favicon path
    ApplicationFavicon: "images/i_hydro.ico",

    // Set application theme
    ApplicationTheme: "styles/blueTheme.css",

    // Set splash window content - Message that appears when the application starts
    SplashScreen: {
        Message: "Lorem ipsum dolor sit er elit lamet, consectetaur cillium adipisicing pecu, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nam liber te conscient to factor tum poen legum odioque civiuda.",
        isVisible: false
    },

    // Set URL of help page/portal
    HelpURL: "help.htm",

    // ------------------------------------------------------------------------------------------------------------------------
    // BASEMAP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set baseMap layers
    // Please note: All base-maps need to use the same spatial reference. By default, on application start the first base-map will be loaded
    BaseMapLayers: [{
        Key: "topoMap",
        ThumbnailSource: "images/topographic.jpg",
        Name: "Topographic Map",
        MapURL: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer"
    }, {
        Key: "streets",
        ThumbnailSource: "images/streets.png",
        Name: "Street Map",
        MapURL: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"
    }],

    // Initial map extent. Use comma (,) to separate values and don't delete the last comma
    DefaultExtent: "-9991781.18961914, 4083344.0852194074, -9160146.321876464, 4494881.045506775",

    // ------------------------------------------------------------------------------------------------------------------------
    // OPERATIONAL DATA SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Configure operational layers:
    //URL used for doing query task on the feature layer
    FacilityLayer: "http://50.18.115.76:6080/arcgis/rest/services/WaterAccess/FeatureServer/0",
    //Set the primary key attribute for features
    PrimaryKeyForFeatures: "${OBJECTID}",


    CommentsLayer: {
        //Set to true if comments need to be displayed , or false if not required
        Visibility: true,
        //URL used for doing query task on the comments layer
        URL: "http://50.18.115.76:6080/arcgis/rest/services/WaterAccess/FeatureServer/1"
    },
    //Set the foreign key attribute for comments
    ForeignKeyforComments: "${id}",

    //Set the name attribute for features
    FeatureName: "${NAME}",

    // ServiceUrl is the REST end point for the reference overlay layer
    // DisplayOnLoad setting is used to show or hide the reference overlay layer. Reference overlay will be shown when it is set to true

    ReferenceOverlayLayer: {
        ServiceUrl: "http://50.18.115.76:6080/arcgis/rest/services/HuntableLands/MapServer/0",
        DisplayOnLoad: true
    },

    // ------------------------------------------------------------------------------------------------------------------------
    // INFO-WINDOW SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Info-window is a small, two line popup that gets displayed on selecting a feature
    // Set Info-window title. Configure this with text/fields
    InfoWindowHeader: [{
        FieldName: "${NAME}",
        Alias: "Facility Name",
        InfoWindowHeaderText: "Facility Info"
    }],

    // Set content/fields for the callout window in Smartphone's
    InfoWindowContent: [{
        FieldName: "${MANAGEUNIT}",
        Alias: "Manage Unit"
    }],

    // ------------------------------------------------------------------------------------------------------------------------
    // INFO-POPUP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Info-popup is a popup dialog that gets displayed on selecting a feature
    // Set the content to be displayed on the info-Popup. Define labels, field values, field types and field formats
    InfoPopupFieldsCollection: [{
        DisplayText: "Access Fee:",
        FieldName: "${ACCESSFEE}"
    }, {
        DisplayText: "Hours Open For:",
        FieldName: "${OPERHOURS}"
    }, {
        DisplayText: "Management Unit:",
        FieldName: "${MANAGEUNIT}"
    }, {
        DisplayText: "Facility Type:",
        FieldName: "${Type}"
    }],

    //Activities to be displayed in info window for a feature
    Activities: [{
        FieldName: "${FOURWHEEL}",
        Alias: "FourWheel",
        Image: "images/fourwheel.png",
        isSelected: true
    }, {
        FieldName: "${ELEHOOKUP}",
        Alias: "Electric Hookup",
        Image: "images/electrichookup.png"
    }, {
        FieldName: "${WTRHOOKUP}",
        Alias: "Water Hookup",
        Image: "images/waterhookup.png"
    }, {
        FieldName: "${RESTROOM}",
        Alias: "Restrooms Available",
        Image: "images/restrooms.png"
    }, {
        FieldName: "${FISHPIER}",
        Alias: "Fishing Pier",
        Image: "images/fishingpier.png"
    }, {
        FieldName: "${CANOELAND}",
        Alias: "Canoe Landing",
        Image: "images/canoelanding.png"
    }, {
        FieldName: "${WINTERPOOL}",
        Alias: "Winter Pool",
        Image: "images/winterpool.png"
    }, {
        FieldName: "${COURTDOCK}",
        Alias: "Courtesy Dock",
        Image: "images/courtesydock.png"
    }, {
        FieldName: "${BOATRENT}",
        Alias: "Rental Available",
        Image: "images/rentavail.png"
    }, {
        FieldName: "${BOATRAMP}",
        Alias: "Boat Ramp",
        Image: "images/boatramp.png"
    }, {
        FieldName: "${MARINA}",
        Alias: "Marina",
        Image: "images/marina.png"
    }, {
        FieldName: "${FISHING}",
        Alias: "Fishing",
        Image: "images/fishing.png"
    }],

    // Set size of the info-Popup - select maximum height and width in pixels (not applicable for tabbed info-Popup)
    InfoPopupHeight: 270,
    InfoPopupWidth: 330,

    // Set string value to be shown for null or blank values
    ShowNullValueAs: "N/A",

    // Set date format
    FormatDateAs: "MMM dd, yyyy",

    //set distance in miles for drawing the buffer
    BufferDistance: "2",

    //Set this variable to true/false to enable/disable directions
    //if this master variable is set to false directions cannot be enabled for any of the devices
    GetDirections: true,

    //Set this variable to true/false to enable/disable directions for Mobile/tablet
    GetDirectionsMobile: true,

    //Set this variable to true/false to enable/disable directions for desktop
    GetDirectionsDesktop: true,

    //Set this value to display text besides calculated distances in search results
    ApproximateValue: "approx",

    // ------------------------------------------------------------------------------------------------------------------------
    // ADDRESS SEARCH SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Set locator settings such as locator symbol, size, display fields, match score
    LocatorSettings: {
        DefaultLocatorSymbol: "images/RedPushpin.png",
        MarkupSymbolSize: {
            width: 35,
            height: 35
        },
        Locators: [{
            DisplayText: "Location",
            LocatorDefaultAddress: "Lake Echo Rd Tracy City TN 37387",
            LocatorParameters: {
                SearchField: "SingleLine",
                SearchBoundaryField: "searchExtent"
            },
            LocatorURL: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
            LocatorOutFields: ["Addr_Type", "Type", "Score", "Match_Addr", "xmin", "xmax", "ymin", "ymax"],
            DisplayField: "${Match_Addr}",
            AddressMatchScore: {
                Field: "Score",
                Value: 80
            },
            AddressSearch: {
                FilterFieldName: 'Addr_Type',
                FilterFieldValues: ["StreetAddress", "StreetName", "PointAddress"]
            },
            PlaceNameSearch: {
                LocatorFieldValue: "POI",
                FilterFieldName: "Type",
                FilterFieldValues: ["county"],
                Enabled: true
            }
        }, {
            DisplayText: "Name",
            LocatorDefaultFeature: "Shelby Park"
        }, {
            DisplayText: "Activity"
        }]
    },

    //Set the locator ripple size(in pixels)
    LocatorRippleSize: 40,

    //Set the Zoom Level
    ZoomLevel: 12,
    // Define the database field names
    // Note: DateFieldName refers to a date database field.
    // All other attributes refer to text database fields.
    DatabaseFields: {
        FeatureIdFieldName: "id",
        CommentsFieldName: "COMMENTS",
        DateFieldName: "SUBMITDT",
        RankFieldName: "RANK"
    },

    // Set info-pop fields for adding and displaying comment
    CommentsInfoPopupFieldsCollection: {
        Rank: "${RANK}",
        SubmitDate: "${SUBMITDT}",
        Comments: "${COMMENTS}"
    },

    // ------------------------------------------------------------------------------------------------------------------------
    // GEOMETRY SERVICE SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Set geometry service URL
    GeometryService: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",

    // ------------------------------------------------------------------------------------------------------------------------
    // DRIVING DIRECTIONS SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set URL for routing service
    RouteServiceURL: "http://tasks.arcgisonline.com/ArcGIS/rest/services/NetworkAnalysis/ESRI_Route_NA/NAServer/Route",

    // Set color for the route symbol
    RouteColor: "#7F7FFE",

    // Set width(in pixels) of the route
    RouteWidth: 6,

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR INFO-PODS ON THE BOTTOM PANEL
    // ------------------------------------------------------------------------------------------------------------------------
    // Set width(in pixels) of the pods in the bottom panel
    InfoBoxWidth: 422,

    // Set sequence for info pods in the bottom panel
    Order: ["search", "facility", "directions", "photogallery", "comments"],

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR MAP SHARING
    // ------------------------------------------------------------------------------------------------------------------------

    // Set URL for TinyURL service, and URLs for social media
    MapSharingOptions: {
        TinyURLServiceURL: "http://api.bit.ly/v3/shorten?login=esri&apiKey=R_65fd9891cd882e2a96b99d4bda1be00e&uri=${0}&format=json",
        TinyURLResponseAttribute: "data.url",
        FacebookShareURL: "http://www.facebook.com/sharer.php?u=${0}&t=Configurable%20Place%20Finder",
        TwitterShareURL: "http://mobile.twitter.com/compose/tweet?status=Configurable%20Place%20Finder ${0}",
        ShareByMailLink: "mailto:%20?subject=Check%20out%20this%20map!&body=${0}"
    }
});