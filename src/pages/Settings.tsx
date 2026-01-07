import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Key, Github, Bell, Trash2, Check } from 'lucide-react';

export const Settings: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [isApiKeySet] = useState(true);

  return (
    <div>
      <Header
        title="Settings"
        subtitle="Configure your Mythril experience"
      />

      <div className="p-8 max-w-3xl space-y-6">
        {/* API Key */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-dwarven/20 rounded-lg">
                <Key className="h-5 w-5 text-dwarven-light" />
              </div>
              <div>
                <CardTitle>API Key</CardTitle>
                <p className="text-sm text-mythril-500">Your Anthropic API key for builds</p>
              </div>
            </div>
            {isApiKeySet && (
              <Badge variant="success">
                <Check className="h-3 w-3 mr-1" />
                Configured
              </Badge>
            )}
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                type="password"
                placeholder="sk-ant-api03-xxxxx..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="flex-1"
              />
              <Button variant="primary">
                {isApiKeySet ? 'Update' : 'Save'}
              </Button>
            </div>
            <p className="text-xs text-mythril-600 mt-2">
              Your key is encrypted and stored securely. We never see your API usage.
            </p>
          </CardContent>
        </Card>

        {/* GitHub */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-dwarven/20 rounded-lg">
                <Github className="h-5 w-5 text-dwarven-light" />
              </div>
              <div>
                <CardTitle>GitHub Integration</CardTitle>
                <p className="text-sm text-mythril-500">Push builds directly to GitHub</p>
              </div>
            </div>
            <Badge variant="warning">Not Connected</Badge>
          </CardHeader>
          <CardContent>
            <Button variant="secondary">
              <Github className="h-4 w-4" />
              Connect GitHub
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-dwarven/20 rounded-lg">
                <Bell className="h-5 w-5 text-dwarven-light" />
              </div>
              <div>
                <CardTitle>Notifications</CardTitle>
                <p className="text-sm text-mythril-500">Control what notifications you receive</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: 'Build completed', enabled: true },
                { label: 'Build failed', enabled: true },
                { label: 'Approval needed', enabled: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-mythril-300">{item.label}</span>
                  <button
                    className={`w-12 h-6 rounded-full transition-colors ${
                      item.enabled ? 'bg-dwarven' : 'bg-mythril-700'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                        item.enabled ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-500/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <Trash2 className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <CardTitle className="text-red-400">Danger Zone</CardTitle>
                <p className="text-sm text-mythril-500">Irreversible actions</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button variant="danger">
              <Trash2 className="h-4 w-4" />
              Delete All My Data
            </Button>
            <p className="text-xs text-mythril-600 mt-2">
              This will permanently delete your API key, brain notes, and build history.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
