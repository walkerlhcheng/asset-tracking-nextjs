import React, { useState, useEffect, useRef, useCallback } from 'react';

import { Play, Pause, Download, Filter, Map, RefreshCw, Settings, Info, Calendar } from 'lucide-react';



const MOCK_API_RESPONSE = {

    \"location\": {
    
        \"facility\": \"Warehouse A\",
        
        \"floor\": \"Ground Floor\",
        
        \"dimensions\": { \"width\": 4000, \"height\": 4000 }
        
    },
    
    \"environment\": {
    
        \"zones\": [
        
            { \"id\": \"z1\", \"type\": \"warning\", \"polygon\": [[500, 500], [1500, 500], [1500, 1500], [500, 1500]] },
            
            { \"id\": \"z2\", \"type\": \"restricted\", \"polygon\": [[2500, 2000], [3500, 2000], [3500, 3000], [2500, 3000]] }
            
        ],
        
        \"walls\": [
        
            [[100, 100], [100, 3900]],
            
            [[100, 3900], [3900, 3900]],
            
            [[3900, 3900], [3900, 100]],
            
            [[3900, 100], [100, 100]],
            
            [[2000, 100], [2000, 1500]],
            
            [[2000, 2500], [2000, 3900]]
            
        ]
        
    },
    
    \"assets\": [
    
        {
        
            \"mac_address\": \"AA:BB:CC:DD:EE:01\",
            
            \"type\": \"forklift\",
            
            \"name\": \"Forklift 1\",
            
            \"battery\": 85,
            
            \"status\": \"active\",
            
            \"current_location\": { \"x\": 1200, \"y\": 800 },
            
            \"path\": [
            
                { \"x\": 800, \"y\": 800, \"timestamp\": \"2026-09-03T10:00:00Z\" },
                
                { \"x\": 1000, \"y\": 800, \"timestamp\": \"2026-09-03T10:05:00Z\" },
                
                { \"x\": 1200, \"y\": 800, \"timestamp\": \"2026-09-03T10:10:00Z\" }
                
            ]
            
        },
        
        {
        
            \"mac_address\": \"AA:BB:CC:DD:EE:02\",
            
            \"type\": \"pallet_jack\",
            
            \"name\": \"Pallet Jack A\",
            
            \"battery\": 42,
            
            \"status\": \"idle\",
            
            \"current_location\": { \"x\": 2800, \"y\": 2500 },
            
            \"path\": [
            
                { \"x\": 3000, \"y\": 2500, \"timestamp\": \"2026-09-03T09:30:00Z\" },
                
                { \"x\": 2900, \"y\": 2500, \"timestamp\": \"2026-09-03T09:35:00Z\" },
                
                { \"x\": 2800, \"y\": 2500, \"timestamp\": \"2026-09-03T09:40:00Z\" }
                
    











































