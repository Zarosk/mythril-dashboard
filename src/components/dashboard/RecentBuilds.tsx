import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { formatRelative, truncate } from '../../lib/utils';
import type { Build } from '../../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RecentBuildsProps {
  builds: Build[];
}

export const RecentBuilds: React.FC<RecentBuildsProps> = ({ builds }) => {
  const statusVariant = (status: string) => {
    const map: Record<string, 'success' | 'warning' | 'error' | 'info'> = {
      completed: 'success',
      running: 'info',
      pending: 'warning',
      failed: 'error',
      rejected: 'error',
    };
    return map[status] || 'info';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Builds</CardTitle>
        <Link
          to="/builds"
          className="text-sm text-dwarven hover:text-dwarven-light flex items-center gap-1"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {builds.length === 0 ? (
            <p className="text-mythril-500 text-center py-8">
              No builds yet. Start forging!
            </p>
          ) : (
            builds.map((build) => (
              <div
                key={build.id}
                className="flex items-center justify-between p-4 bg-moria-800 rounded-lg hover:bg-moria-600 transition-colors cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-mythril-100">
                      {build.project}
                    </span>
                    <Badge variant={statusVariant(build.status)}>
                      {build.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-mythril-500 mt-1 truncate">
                    {truncate(build.description, 60)}
                  </p>
                </div>
                <span className="text-sm text-mythril-600 ml-4">
                  {formatRelative(build.createdAt)}
                </span>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};
