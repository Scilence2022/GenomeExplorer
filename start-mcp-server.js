#!/usr/bin/env node

/**
 * Start MCP Server for Genome AI Studio
 * 
 * This script starts the MCP (Model Context Protocol) server
 * that enables LLM integration with the Genome AI Studio.
 */

const MCPGenomeBrowserServer = require('./src/mcp-server.js');

console.log('🧬 Starting Genome AI Studio MCP Server...');
console.log('');

const server = new MCPGenomeBrowserServer();
server.start();

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down MCP Server...');
    server.stop();
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down MCP Server...');
    server.stop();
    process.exit(0);
});

console.log('💡 Usage Instructions:');
console.log('1. Keep this server running');
console.log('2. Launch the Genome AI Studio');
console.log('3. Click the AI Assistant button in the toolbar');
console.log('4. Configure your LLM integration (see documentation)');
console.log('');
console.log('📚 Available MCP Tools:');
console.log('- navigate_to_position: Navigate to genomic coordinates');
console.log('- search_features: Search for genes and features');
console.log('- get_current_state: Get browser state information');
console.log('- get_sequence: Extract DNA sequences');
console.log('- toggle_track: Show/hide visualization tracks');
console.log('- create_annotation: Create custom annotations');
console.log('- analyze_region: Analyze genomic regions');
console.log('- export_data: Export sequence/annotation data');
console.log('- fetch_protein_structure: Download protein 3D structure from PDB');
console.log('- search_protein_by_gene: Search protein structures by gene name');
console.log('- open_protein_viewer: Open 3D protein structure viewer');
console.log('');
console.log('🔗 Endpoints:');
console.log('- WebSocket: ws://localhost:3001 (Browser connection)');
console.log('- HTTP API: http://localhost:3000 (LLM integration)');
console.log('- Health: http://localhost:3000/health');
console.log('- Tools: http://localhost:3000/tools');
console.log(''); 