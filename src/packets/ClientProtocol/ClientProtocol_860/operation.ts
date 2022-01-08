


export const operationPackets:any = [
    ["Operation.RequestCreate", 0xbf01, {}],
    ["Operation.RequestDestroy", 0xbf02, {}],
    ["Operation.RequestJoin", 0xbf03, {}],
    ["Operation.RequestJoinByName", 0xbf04, {}],
    ["Operation.RequestLeave", 0xbf05, {}],
    ["Operation.ClientJoined", 0xbf06, {}],
    ["Operation.ClientLeft", 0xbf07, {}],
    ["Operation.BecomeListener", 0xbf08, {}],
    ["Operation.AvailableData", 0xbf09, {}],
    ["Operation.Created", 0xbf0a, {}],
    ["Operation.Destroyed", 0xbf0b, {}],
    [
      "Operation.ClientClearMissions",
      0xbf0c,
      {
        fields: [],
      },
    ],
    ["Operation.InstanceAreaUpdate", 0xbf0d, {}],
    ["Operation.ClientInArea", 0xbf0e, {}],
    ["Operation.InstanceLocationUpdate", 0xbf0f, {}],
    ["Operation.GroupOperationListRequest", 0xbf10, {}],
    ["Operation.GroupOperationListReply", 0xbf11, {}],
    ["Operation.GroupOperationSelect", 0xbf12, {}],

]