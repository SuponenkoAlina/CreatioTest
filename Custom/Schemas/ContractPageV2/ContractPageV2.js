define("ContractPageV2", [], function() {
	return {
		entitySchemaName: "Contract",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{
			"Indicator9346fde2-e193-4ae0-aaad-a53cc7036721": {
				"moduleId": "Indicator9346fde2-e193-4ae0-aaad-a53cc7036721",
				"moduleName": "CardWidgetModule",
				"config": {
					"parameters": {
						"viewModelConfig": {
							"widgetKey": "Indicator9346fde2-e193-4ae0-aaad-a53cc7036721",
							"recordId": "b9fee1f9-9a45-40f0-883c-9c7cd9787232",
							"primaryColumnValue": {
								"getValueMethod": "getPrimaryColumnValue"
							}
						}
					}
				}
			}
		}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Indicator9346fde2-e193-4ae0-aaad-a53cc7036721",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer",
						"useFixedColumnHeight": true
					},
					"itemType": 4,
					"classes": {
						"wrapClassName": [
							"card-widget-grid-layout-item"
						]
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "Amount",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Parent",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "Parent",
				"parentName": "ContractConnectionsBlock",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "Order",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "ContractPassportTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "ContractVisaTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "NotesAndFilesTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "move",
				"name": "Type",
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "move",
				"name": "State",
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "move",
				"name": "OurCompany",
				"parentName": "group_gridLayout",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "move",
				"name": "SupplierBillingInfo",
				"parentName": "group_gridLayout",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_DIFF*/
	};
});
